# `athenaWorkGroup` Submodule <a name="`athenaWorkGroup` Submodule" id="@cdktn/provider-awscc.athenaWorkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkGroup <a name="AthenaWorkGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group awscc_athena_work_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  recursive_delete_option: bool | IResolvable = None,
  state: str = None,
  tags: IResolvable | typing.List[AthenaWorkGroupTags] = None,
  work_group_configuration: AthenaWorkGroupWorkGroupConfiguration = None,
  work_group_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdates = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.recursiveDeleteOption">recursive_delete_option</a></code> | <code>bool \| cdktn.IResolvable</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]</code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfiguration">work_group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfigurationUpdates">work_group_configuration_updates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.name"></a>

- *Type:* str

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.description"></a>

- *Type:* str

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `recursive_delete_option`<sup>Optional</sup> <a name="recursive_delete_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.recursiveDeleteOption"></a>

- *Type:* bool | cdktn.IResolvable

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.state"></a>

- *Type:* str

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `work_group_configuration`<sup>Optional</sup> <a name="work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `work_group_configuration_updates`<sup>Optional</sup> <a name="work_group_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.workGroupConfigurationUpdates"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration">put_work_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates">put_work_group_configuration_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption">reset_recursive_delete_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration">reset_work_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates">reset_work_group_configuration_updates</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AthenaWorkGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]

---

##### `put_work_group_configuration` <a name="put_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration"></a>

```python
def put_work_group_configuration(
  additional_configuration: str = None,
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration = None,
  enforce_work_group_configuration: bool | IResolvable = None,
  engine_configuration: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration = None,
  engine_version: AthenaWorkGroupWorkGroupConfigurationEngineVersion = None,
  execution_role: str = None,
  managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfiguration = None
) -> None
```

###### `additional_configuration`<sup>Optional</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.additionalConfiguration"></a>

- *Type:* str

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

###### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.bytesScannedCutoffPerQuery"></a>

- *Type:* typing.Union[int, float]

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

###### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.customerContentEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

###### `enforce_work_group_configuration`<sup>Optional</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.enforceWorkGroupConfiguration"></a>

- *Type:* bool | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

###### `engine_configuration`<sup>Optional</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.engineConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

###### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.engineVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

###### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.executionRole"></a>

- *Type:* str

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

###### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.managedQueryResultsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

###### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.monitoringConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

###### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.publishCloudwatchMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

###### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.requesterPaysEnabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

###### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.resultConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}

---

##### `put_work_group_configuration_updates` <a name="put_work_group_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates"></a>

```python
def put_work_group_configuration_updates(
  additional_configuration: str = None,
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration = None,
  enforce_work_group_configuration: bool | IResolvable = None,
  engine_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration = None,
  engine_version: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion = None,
  execution_role: str = None,
  managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  remove_bytes_scanned_cutoff_per_query: bool | IResolvable = None,
  remove_customer_content_encryption_configuration: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates = None
) -> None
```

###### `additional_configuration`<sup>Optional</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.additionalConfiguration"></a>

- *Type:* str

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

###### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.bytesScannedCutoffPerQuery"></a>

- *Type:* typing.Union[int, float]

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

###### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.customerContentEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

###### `enforce_work_group_configuration`<sup>Optional</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.enforceWorkGroupConfiguration"></a>

- *Type:* bool | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

###### `engine_configuration`<sup>Optional</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.engineConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

###### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.engineVersion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

###### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.executionRole"></a>

- *Type:* str

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

###### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.managedQueryResultsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

###### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.monitoringConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

###### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.publishCloudwatchMetricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

###### `remove_bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="remove_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.removeBytesScannedCutoffPerQuery"></a>

- *Type:* bool | cdktn.IResolvable

Indicates that the data usage control limit per query is removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}

---

###### `remove_customer_content_encryption_configuration`<sup>Optional</sup> <a name="remove_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.removeCustomerContentEncryptionConfiguration"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}.

---

###### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.requesterPaysEnabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

###### `result_configuration_updates`<sup>Optional</sup> <a name="result_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.resultConfigurationUpdates"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

The result configuration information about the queries in this workgroup that will be updated.

Includes the updated results location and an updated option for encrypting query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_recursive_delete_option` <a name="reset_recursive_delete_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption"></a>

```python
def reset_recursive_delete_option() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_work_group_configuration` <a name="reset_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration"></a>

```python
def reset_work_group_configuration() -> None
```

##### `reset_work_group_configuration_updates` <a name="reset_work_group_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates"></a>

```python
def reset_work_group_configuration_updates() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AthenaWorkGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AthenaWorkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaWorkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration">work_group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates">work_group_configuration_updates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput">recursive_delete_option_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput">work_group_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput">work_group_configuration_updates_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption">recursive_delete_option</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags"></a>

```python
tags: AthenaWorkGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a>

---

##### `work_group_configuration`<sup>Required</sup> <a name="work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration"></a>

```python
work_group_configuration: AthenaWorkGroupWorkGroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a>

---

##### `work_group_configuration_updates`<sup>Required</sup> <a name="work_group_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates"></a>

```python
work_group_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recursive_delete_option_input`<sup>Optional</sup> <a name="recursive_delete_option_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput"></a>

```python
recursive_delete_option_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AthenaWorkGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]

---

##### `work_group_configuration_input`<sup>Optional</sup> <a name="work_group_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput"></a>

```python
work_group_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `work_group_configuration_updates_input`<sup>Optional</sup> <a name="work_group_configuration_updates_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput"></a>

```python
work_group_configuration_updates_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recursive_delete_option`<sup>Required</sup> <a name="recursive_delete_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption"></a>

```python
recursive_delete_option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkGroupConfig <a name="AthenaWorkGroupConfig" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  recursive_delete_option: bool | IResolvable = None,
  state: str = None,
  tags: IResolvable | typing.List[AthenaWorkGroupTags] = None,
  work_group_configuration: AthenaWorkGroupWorkGroupConfiguration = None,
  work_group_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdates = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name">name</a></code> | <code>str</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description">description</a></code> | <code>str</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption">recursive_delete_option</a></code> | <code>bool \| cdktn.IResolvable</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state">state</a></code> | <code>str</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]</code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration">work_group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates">work_group_configuration_updates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `recursive_delete_option`<sup>Optional</sup> <a name="recursive_delete_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption"></a>

```python
recursive_delete_option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AthenaWorkGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `work_group_configuration`<sup>Optional</sup> <a name="work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration"></a>

```python
work_group_configuration: AthenaWorkGroupWorkGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `work_group_configuration_updates`<sup>Optional</sup> <a name="work_group_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates"></a>

```python
work_group_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

### AthenaWorkGroupTags <a name="AthenaWorkGroupTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}.

---

### AthenaWorkGroupWorkGroupConfiguration <a name="AthenaWorkGroupWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration(
  additional_configuration: str = None,
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration = None,
  enforce_work_group_configuration: bool | IResolvable = None,
  engine_configuration: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration = None,
  engine_version: AthenaWorkGroupWorkGroupConfigurationEngineVersion = None,
  execution_role: str = None,
  managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration">additional_configuration</a></code> | <code>str</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration">enforce_work_group_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration">engine_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole">execution_role</a></code> | <code>str</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. |

---

##### `additional_configuration`<sup>Optional</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration"></a>

```python
additional_configuration: str
```

- *Type:* str

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforce_work_group_configuration`<sup>Optional</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

```python
enforce_work_group_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engine_configuration`<sup>Optional</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration"></a>

```python
engine_configuration: AthenaWorkGroupWorkGroupConfigurationEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion"></a>

```python
engine_version: AthenaWorkGroupWorkGroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `result_configuration`<sup>Optional</sup> <a name="result_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration(
  additional_configs: typing.Mapping[str] = None,
  classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications] = None,
  coordinator_dpu_size: typing.Union[int, float] = None,
  default_executor_dpu_size: typing.Union[int, float] = None,
  max_concurrent_dpus: typing.Union[int, float] = None,
  spark_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs">additional_configs</a></code> | <code>typing.Mapping[str]</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications">classifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize">coordinator_dpu_size</a></code> | <code>typing.Union[int, float]</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize">default_executor_dpu_size</a></code> | <code>typing.Union[int, float]</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus">max_concurrent_dpus</a></code> | <code>typing.Union[int, float]</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additional_configs`<sup>Optional</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs"></a>

```python
additional_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications"></a>

```python
classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinator_dpu_size`<sup>Optional</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize"></a>

```python
coordinator_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `default_executor_dpu_size`<sup>Optional</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize"></a>

```python
default_executor_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `max_concurrent_dpus`<sup>Optional</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus"></a>

```python
max_concurrent_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications(
  name: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name">name</a></code> | <code>str</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion(
  selected_engine_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | The engine version requested by the user. |

---

##### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration(
  cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatch_logging_configuration`<sup>Optional</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```python
cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration(
  enabled: bool | IResolvable = None,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_types: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">log_group</a></code> | <code>str</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">log_types</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```python
log_types: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration(
  enabled: bool | IResolvable = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration(
  enabled: bool | IResolvable = None,
  kms_key: str = None,
  log_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">log_location</a></code> | <code>str</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration(
  acl_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation">output_location</a></code> | <code>str</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |

---

##### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration(
  s3_acl_option: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3_acl_option`<sup>Optional</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration(
  encryption_option: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates(
  additional_configuration: str = None,
  bytes_scanned_cutoff_per_query: typing.Union[int, float] = None,
  customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration = None,
  enforce_work_group_configuration: bool | IResolvable = None,
  engine_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration = None,
  engine_version: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion = None,
  execution_role: str = None,
  managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration = None,
  monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration = None,
  publish_cloudwatch_metrics_enabled: bool | IResolvable = None,
  remove_bytes_scanned_cutoff_per_query: bool | IResolvable = None,
  remove_customer_content_encryption_configuration: bool | IResolvable = None,
  requester_pays_enabled: bool | IResolvable = None,
  result_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration">additional_configuration</a></code> | <code>str</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration">enforce_work_group_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration">engine_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole">execution_role</a></code> | <code>str</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery">remove_bytes_scanned_cutoff_per_query</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates that the data usage control limit per query is removed. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration">remove_customer_content_encryption_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates">result_configuration_updates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | The result configuration information about the queries in this workgroup that will be updated. |

---

##### `additional_configuration`<sup>Optional</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration"></a>

```python
additional_configuration: str
```

- *Type:* str

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `customer_content_encryption_configuration`<sup>Optional</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `enforce_work_group_configuration`<sup>Optional</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration"></a>

```python
enforce_work_group_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `engine_configuration`<sup>Optional</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration"></a>

```python
engine_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion"></a>

```python
engine_version: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `execution_role`<sup>Optional</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `managed_query_results_configuration`<sup>Optional</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `monitoring_configuration`<sup>Optional</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `publish_cloudwatch_metrics_enabled`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `remove_bytes_scanned_cutoff_per_query`<sup>Optional</sup> <a name="remove_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery"></a>

```python
remove_bytes_scanned_cutoff_per_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates that the data usage control limit per query is removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}

---

##### `remove_customer_content_encryption_configuration`<sup>Optional</sup> <a name="remove_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration"></a>

```python
remove_customer_content_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}.

---

##### `requester_pays_enabled`<sup>Optional</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `result_configuration_updates`<sup>Optional</sup> <a name="result_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates"></a>

```python
result_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

The result configuration information about the queries in this workgroup that will be updated.

Includes the updated results location and an updated option for encrypting query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration(
  additional_configs: typing.Mapping[str] = None,
  classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications] = None,
  coordinator_dpu_size: typing.Union[int, float] = None,
  default_executor_dpu_size: typing.Union[int, float] = None,
  max_concurrent_dpus: typing.Union[int, float] = None,
  spark_properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs">additional_configs</a></code> | <code>typing.Mapping[str]</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications">classifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize">coordinator_dpu_size</a></code> | <code>typing.Union[int, float]</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize">default_executor_dpu_size</a></code> | <code>typing.Union[int, float]</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus">max_concurrent_dpus</a></code> | <code>typing.Union[int, float]</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `additional_configs`<sup>Optional</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs"></a>

```python
additional_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications"></a>

```python
classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `coordinator_dpu_size`<sup>Optional</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize"></a>

```python
coordinator_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `default_executor_dpu_size`<sup>Optional</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize"></a>

```python
default_executor_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `max_concurrent_dpus`<sup>Optional</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus"></a>

```python
max_concurrent_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications(
  name: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name">name</a></code> | <code>str</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | A set of properties specified within a configuration classification. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion(
  selected_engine_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | The engine version requested by the user. |

---

##### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration(
  cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration">cloudwatch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `cloudwatch_logging_configuration`<sup>Optional</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```python
cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration(
  enabled: bool | IResolvable = None,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_types: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">log_group</a></code> | <code>str</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">log_types</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```python
log_types: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration(
  enabled: bool | IResolvable = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration(
  enabled: bool | IResolvable = None,
  kms_key: str = None,
  log_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation">log_location</a></code> | <code>str</code> | The Amazon S3 destination URI for log publishing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates(
  acl_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None,
  remove_acl_configuration: bool | IResolvable = None,
  remove_encryption_configuration: bool | IResolvable = None,
  remove_expected_bucket_owner: bool | IResolvable = None,
  remove_output_location: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation">output_location</a></code> | <code>str</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration">remove_acl_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration">remove_encryption_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner">remove_expected_bucket_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation">remove_output_location</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}. |

---

##### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

##### `remove_acl_configuration`<sup>Optional</sup> <a name="remove_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration"></a>

```python
remove_acl_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}.

---

##### `remove_encryption_configuration`<sup>Optional</sup> <a name="remove_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration"></a>

```python
remove_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}.

---

##### `remove_expected_bucket_owner`<sup>Optional</sup> <a name="remove_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner"></a>

```python
remove_expected_bucket_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}.

---

##### `remove_output_location`<sup>Optional</sup> <a name="remove_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation"></a>

```python
remove_output_location: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}.

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration(
  s3_acl_option: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `s3_acl_option`<sup>Optional</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration(
  encryption_option: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption">encryption_option</a></code> | <code>str</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkGroupTagsList <a name="AthenaWorkGroupTagsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaWorkGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaWorkGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>]

---


### AthenaWorkGroupTagsOutputReference <a name="AthenaWorkGroupTagsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags">AthenaWorkGroupTags</a>

---


### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications">put_classifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs">reset_additional_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications">reset_classifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize">reset_coordinator_dpu_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">reset_default_executor_dpu_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus">reset_max_concurrent_dpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties">reset_spark_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_classifications` <a name="put_classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications"></a>

```python
def put_classifications(
  value: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]

---

##### `reset_additional_configs` <a name="reset_additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```python
def reset_additional_configs() -> None
```

##### `reset_classifications` <a name="reset_classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications"></a>

```python
def reset_classifications() -> None
```

##### `reset_coordinator_dpu_size` <a name="reset_coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```python
def reset_coordinator_dpu_size() -> None
```

##### `reset_default_executor_dpu_size` <a name="reset_default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```python
def reset_default_executor_dpu_size() -> None
```

##### `reset_max_concurrent_dpus` <a name="reset_max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```python
def reset_max_concurrent_dpus() -> None
```

##### `reset_spark_properties` <a name="reset_spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties"></a>

```python
def reset_spark_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput">additional_configs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput">classifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinator_dpu_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">default_executor_dpu_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput">max_concurrent_dpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput">spark_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs">additional_configs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinator_dpu_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize">default_executor_dpu_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus">max_concurrent_dpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications"></a>

```python
classifications: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a>

---

##### `additional_configs_input`<sup>Optional</sup> <a name="additional_configs_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```python
additional_configs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classifications_input`<sup>Optional</sup> <a name="classifications_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput"></a>

```python
classifications_input: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]

---

##### `coordinator_dpu_size_input`<sup>Optional</sup> <a name="coordinator_dpu_size_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```python
coordinator_dpu_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_executor_dpu_size_input`<sup>Optional</sup> <a name="default_executor_dpu_size_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```python
default_executor_dpu_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dpus_input`<sup>Optional</sup> <a name="max_concurrent_dpus_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```python
max_concurrent_dpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_properties_input`<sup>Optional</sup> <a name="spark_properties_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```python
spark_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_configs`<sup>Required</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs"></a>

```python
additional_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `coordinator_dpu_size`<sup>Required</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```python
coordinator_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_executor_dpu_size`<sup>Required</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```python
default_executor_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dpus`<sup>Required</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```python
max_concurrent_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_properties`<sup>Required</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">reset_selected_engine_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selected_engine_version` <a name="reset_selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```python
def reset_selected_engine_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">effective_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">selected_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_engine_version`<sup>Required</sup> <a name="effective_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```python
effective_engine_version: str
```

- *Type:* str

---

##### `selected_engine_version_input`<sup>Optional</sup> <a name="selected_engine_version_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```python
selected_engine_version_input: str
```

- *Type:* str

---

##### `selected_engine_version`<sup>Required</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">reset_log_stream_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">reset_log_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_log_stream_name_prefix` <a name="reset_log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```python
def reset_log_stream_name_prefix() -> None
```

##### `reset_log_types` <a name="reset_log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```python
def reset_log_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">log_stream_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">log_types_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">log_types</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_stream_name_prefix_input`<sup>Optional</sup> <a name="log_stream_name_prefix_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```python
log_stream_name_prefix_input: str
```

- *Type:* str

---

##### `log_types_input`<sup>Optional</sup> <a name="log_types_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```python
log_types_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream_name_prefix`<sup>Required</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

---

##### `log_types`<sup>Required</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```python
log_types: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">put_cloudwatch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">put_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">put_s3_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">reset_cloudwatch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">reset_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">reset_s3_logging_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logging_configuration` <a name="put_cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```python
def put_cloudwatch_logging_configuration(
  enabled: bool | IResolvable = None,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_types: IResolvable | typing.Mapping[typing.List[str]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logGroup"></a>

- *Type:* str

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

###### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logStreamNamePrefix"></a>

- *Type:* str

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

###### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logTypes"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

##### `put_managed_logging_configuration` <a name="put_managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```python
def put_managed_logging_configuration(
  enabled: bool | IResolvable = None,
  kms_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `put_s3_logging_configuration` <a name="put_s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```python
def put_s3_logging_configuration(
  enabled: bool | IResolvable = None,
  kms_key: str = None,
  log_location: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

###### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.logLocation"></a>

- *Type:* str

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

##### `reset_cloudwatch_logging_configuration` <a name="reset_cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```python
def reset_cloudwatch_logging_configuration() -> None
```

##### `reset_managed_logging_configuration` <a name="reset_managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```python
def reset_managed_logging_configuration() -> None
```

##### `reset_s3_logging_configuration` <a name="reset_s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```python
def reset_s3_logging_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatch_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managed_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logging_configuration`<sup>Required</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```python
cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managed_logging_configuration`<sup>Required</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3_logging_configuration`<sup>Required</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatch_logging_configuration_input`<sup>Optional</sup> <a name="cloudwatch_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```python
cloudwatch_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managed_logging_configuration_input`<sup>Optional</sup> <a name="managed_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```python
managed_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3_logging_configuration_input`<sup>Optional</sup> <a name="s3_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```python
s3_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">reset_log_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_log_location` <a name="reset_log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```python
def reset_log_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">log_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">log_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `log_location_input`<sup>Optional</sup> <a name="log_location_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```python
log_location_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">put_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration">put_engine_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion">put_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration">put_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration">put_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration">put_result_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration">reset_additional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">reset_bytes_scanned_cutoff_per_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">reset_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration">reset_enforce_work_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration">reset_engine_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">reset_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration">reset_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">reset_publish_cloudwatch_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled">reset_requester_pays_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration">reset_result_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_content_encryption_configuration` <a name="put_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```python
def put_customer_content_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `put_engine_configuration` <a name="put_engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration"></a>

```python
def put_engine_configuration(
  additional_configs: typing.Mapping[str] = None,
  classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications] = None,
  coordinator_dpu_size: typing.Union[int, float] = None,
  default_executor_dpu_size: typing.Union[int, float] = None,
  max_concurrent_dpus: typing.Union[int, float] = None,
  spark_properties: typing.Mapping[str] = None
) -> None
```

###### `additional_configs`<sup>Optional</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.additionalConfigs"></a>

- *Type:* typing.Mapping[str]

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

###### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.classifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications</a>]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

###### `coordinator_dpu_size`<sup>Optional</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.coordinatorDpuSize"></a>

- *Type:* typing.Union[int, float]

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

###### `default_executor_dpu_size`<sup>Optional</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.defaultExecutorDpuSize"></a>

- *Type:* typing.Union[int, float]

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

###### `max_concurrent_dpus`<sup>Optional</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.maxConcurrentDpus"></a>

- *Type:* typing.Union[int, float]

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

###### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.sparkProperties"></a>

- *Type:* typing.Mapping[str]

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

##### `put_engine_version` <a name="put_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion"></a>

```python
def put_engine_version(
  selected_engine_version: str = None
) -> None
```

###### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion.parameter.selectedEngineVersion"></a>

- *Type:* str

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

##### `put_managed_query_results_configuration` <a name="put_managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```python
def put_managed_query_results_configuration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `put_monitoring_configuration` <a name="put_monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```python
def put_monitoring_configuration(
  cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration = None
) -> None
```

###### `cloudwatch_logging_configuration`<sup>Optional</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.cloudwatchLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

###### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.managedLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

###### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.s3LoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

##### `put_result_configuration` <a name="put_result_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration"></a>

```python
def put_result_configuration(
  acl_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None
) -> None
```

###### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.aclConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.expectedBucketOwner"></a>

- *Type:* str

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.outputLocation"></a>

- *Type:* str

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

##### `reset_additional_configuration` <a name="reset_additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration"></a>

```python
def reset_additional_configuration() -> None
```

##### `reset_bytes_scanned_cutoff_per_query` <a name="reset_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```python
def reset_bytes_scanned_cutoff_per_query() -> None
```

##### `reset_customer_content_encryption_configuration` <a name="reset_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```python
def reset_customer_content_encryption_configuration() -> None
```

##### `reset_enforce_work_group_configuration` <a name="reset_enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration"></a>

```python
def reset_enforce_work_group_configuration() -> None
```

##### `reset_engine_configuration` <a name="reset_engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration"></a>

```python
def reset_engine_configuration() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_managed_query_results_configuration` <a name="reset_managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```python
def reset_managed_query_results_configuration() -> None
```

##### `reset_monitoring_configuration` <a name="reset_monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```python
def reset_monitoring_configuration() -> None
```

##### `reset_publish_cloudwatch_metrics_enabled` <a name="reset_publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```python
def reset_publish_cloudwatch_metrics_enabled() -> None
```

##### `reset_requester_pays_enabled` <a name="reset_requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```python
def reset_requester_pays_enabled() -> None
```

##### `reset_result_configuration` <a name="reset_result_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration"></a>

```python
def reset_result_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration">engine_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration">result_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput">additional_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">bytes_scanned_cutoff_per_query_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">customer_content_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput">enforce_work_group_configuration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput">engine_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput">engine_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">managed_query_results_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput">monitoring_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">publish_cloudwatch_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput">requester_pays_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput">result_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration">additional_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration">enforce_work_group_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_content_encryption_configuration`<sup>Required</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engine_configuration`<sup>Required</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration"></a>

```python
engine_configuration: AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a>

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion"></a>

```python
engine_version: AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a>

---

##### `managed_query_results_configuration`<sup>Required</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoring_configuration`<sup>Required</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `result_configuration`<sup>Required</sup> <a name="result_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration"></a>

```python
result_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a>

---

##### `additional_configuration_input`<sup>Optional</sup> <a name="additional_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput"></a>

```python
additional_configuration_input: str
```

- *Type:* str

---

##### `bytes_scanned_cutoff_per_query_input`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```python
bytes_scanned_cutoff_per_query_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_content_encryption_configuration_input`<sup>Optional</sup> <a name="customer_content_encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```python
customer_content_encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `enforce_work_group_configuration_input`<sup>Optional</sup> <a name="enforce_work_group_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```python
enforce_work_group_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine_configuration_input`<sup>Optional</sup> <a name="engine_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput"></a>

```python
engine_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput"></a>

```python
engine_version_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationEngineVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `managed_query_results_configuration_input`<sup>Optional</sup> <a name="managed_query_results_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```python
managed_query_results_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `monitoring_configuration_input`<sup>Optional</sup> <a name="monitoring_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```python
monitoring_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `publish_cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```python
publish_cloudwatch_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays_enabled_input`<sup>Optional</sup> <a name="requester_pays_enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```python
requester_pays_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result_configuration_input`<sup>Optional</sup> <a name="result_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```python
result_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `additional_configuration`<sup>Required</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration"></a>

```python
additional_configuration: str
```

- *Type:* str

---

##### `bytes_scanned_cutoff_per_query`<sup>Required</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_work_group_configuration`<sup>Required</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration"></a>

```python
enforce_work_group_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `publish_cloudwatch_metrics_enabled`<sup>Required</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays_enabled`<sup>Required</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption">reset_s3_acl_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_acl_option` <a name="reset_s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption"></a>

```python
def reset_s3_acl_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">s3_acl_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_acl_option_input`<sup>Optional</sup> <a name="s3_acl_option_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```python
s3_acl_option_input: str
```

- *Type:* str

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration">put_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">reset_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acl_configuration` <a name="put_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```python
def put_acl_configuration(
  s3_acl_option: str = None
) -> None
```

###### `s3_acl_option`<sup>Optional</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.s3AclOption"></a>

- *Type:* str

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_option: str = None,
  kms_key: str = None
) -> None
```

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.encryptionOption"></a>

- *Type:* str

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `reset_acl_configuration` <a name="reset_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```python
def reset_acl_configuration() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">acl_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation">output_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_configuration`<sup>Required</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `acl_configuration_input`<sup>Optional</sup> <a name="acl_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```python
acl_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```python
output_location_input: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationResultConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications">put_classifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs">reset_additional_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications">reset_classifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize">reset_coordinator_dpu_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">reset_default_executor_dpu_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus">reset_max_concurrent_dpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties">reset_spark_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_classifications` <a name="put_classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications"></a>

```python
def put_classifications(
  value: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]

---

##### `reset_additional_configs` <a name="reset_additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```python
def reset_additional_configs() -> None
```

##### `reset_classifications` <a name="reset_classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications"></a>

```python
def reset_classifications() -> None
```

##### `reset_coordinator_dpu_size` <a name="reset_coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```python
def reset_coordinator_dpu_size() -> None
```

##### `reset_default_executor_dpu_size` <a name="reset_default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```python
def reset_default_executor_dpu_size() -> None
```

##### `reset_max_concurrent_dpus` <a name="reset_max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```python
def reset_max_concurrent_dpus() -> None
```

##### `reset_spark_properties` <a name="reset_spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties"></a>

```python
def reset_spark_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications">classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput">additional_configs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput">classifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">coordinator_dpu_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">default_executor_dpu_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput">max_concurrent_dpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput">spark_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs">additional_configs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize">coordinator_dpu_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize">default_executor_dpu_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus">max_concurrent_dpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications"></a>

```python
classifications: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a>

---

##### `additional_configs_input`<sup>Optional</sup> <a name="additional_configs_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```python
additional_configs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classifications_input`<sup>Optional</sup> <a name="classifications_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput"></a>

```python
classifications_input: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]

---

##### `coordinator_dpu_size_input`<sup>Optional</sup> <a name="coordinator_dpu_size_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```python
coordinator_dpu_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_executor_dpu_size_input`<sup>Optional</sup> <a name="default_executor_dpu_size_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```python
default_executor_dpu_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dpus_input`<sup>Optional</sup> <a name="max_concurrent_dpus_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```python
max_concurrent_dpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_properties_input`<sup>Optional</sup> <a name="spark_properties_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```python
spark_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_configs`<sup>Required</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs"></a>

```python
additional_configs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `coordinator_dpu_size`<sup>Required</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```python
coordinator_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_executor_dpu_size`<sup>Required</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```python
default_executor_dpu_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_dpus`<sup>Required</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```python
max_concurrent_dpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_properties`<sup>Required</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion">reset_selected_engine_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selected_engine_version` <a name="reset_selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```python
def reset_selected_engine_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion">effective_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput">selected_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion">selected_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_engine_version`<sup>Required</sup> <a name="effective_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```python
effective_engine_version: str
```

- *Type:* str

---

##### `selected_engine_version_input`<sup>Optional</sup> <a name="selected_engine_version_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```python
selected_engine_version_input: str
```

- *Type:* str

---

##### `selected_engine_version`<sup>Required</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion"></a>

```python
selected_engine_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">reset_log_stream_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">reset_log_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_log_stream_name_prefix` <a name="reset_log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```python
def reset_log_stream_name_prefix() -> None
```

##### `reset_log_types` <a name="reset_log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```python
def reset_log_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">log_stream_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">log_types_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">log_stream_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">log_types</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_stream_name_prefix_input`<sup>Optional</sup> <a name="log_stream_name_prefix_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```python
log_stream_name_prefix_input: str
```

- *Type:* str

---

##### `log_types_input`<sup>Optional</sup> <a name="log_types_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```python
log_types_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream_name_prefix`<sup>Required</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```python
log_stream_name_prefix: str
```

- *Type:* str

---

##### `log_types`<sup>Required</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```python
log_types: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">put_cloudwatch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">put_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration">put_s3_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">reset_cloudwatch_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">reset_managed_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">reset_s3_logging_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logging_configuration` <a name="put_cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```python
def put_cloudwatch_logging_configuration(
  enabled: bool | IResolvable = None,
  log_group: str = None,
  log_stream_name_prefix: str = None,
  log_types: IResolvable | typing.Mapping[typing.List[str]] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logGroup"></a>

- *Type:* str

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

###### `log_stream_name_prefix`<sup>Optional</sup> <a name="log_stream_name_prefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logStreamNamePrefix"></a>

- *Type:* str

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

###### `log_types`<sup>Optional</sup> <a name="log_types" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.logTypes"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

##### `put_managed_logging_configuration` <a name="put_managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```python
def put_managed_logging_configuration(
  enabled: bool | IResolvable = None,
  kms_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `put_s3_logging_configuration` <a name="put_s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```python
def put_s3_logging_configuration(
  enabled: bool | IResolvable = None,
  kms_key: str = None,
  log_location: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.kmsKey"></a>

- *Type:* str

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

###### `log_location`<sup>Optional</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.logLocation"></a>

- *Type:* str

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

##### `reset_cloudwatch_logging_configuration` <a name="reset_cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```python
def reset_cloudwatch_logging_configuration() -> None
```

##### `reset_managed_logging_configuration` <a name="reset_managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```python
def reset_managed_logging_configuration() -> None
```

##### `reset_s3_logging_configuration` <a name="reset_s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```python
def reset_s3_logging_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">cloudwatch_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">managed_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">s3_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">cloudwatch_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">managed_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">s3_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logging_configuration`<sup>Required</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```python
cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `managed_logging_configuration`<sup>Required</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```python
managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `s3_logging_configuration`<sup>Required</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```python
s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `cloudwatch_logging_configuration_input`<sup>Optional</sup> <a name="cloudwatch_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```python
cloudwatch_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `managed_logging_configuration_input`<sup>Optional</sup> <a name="managed_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```python
managed_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `s3_logging_configuration_input`<sup>Optional</sup> <a name="s3_logging_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```python
s3_logging_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">reset_log_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_log_location` <a name="reset_log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```python
def reset_log_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">log_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">log_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `log_location_input`<sup>Optional</sup> <a name="log_location_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```python
log_location_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `log_location`<sup>Required</sup> <a name="log_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```python
log_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration">put_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration">put_engine_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion">put_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration">put_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration">put_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates">put_result_configuration_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration">reset_additional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery">reset_bytes_scanned_cutoff_per_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration">reset_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration">reset_enforce_work_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration">reset_engine_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole">reset_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration">reset_managed_query_results_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration">reset_monitoring_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled">reset_publish_cloudwatch_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery">reset_remove_bytes_scanned_cutoff_per_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration">reset_remove_customer_content_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled">reset_requester_pays_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates">reset_result_configuration_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_content_encryption_configuration` <a name="put_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration"></a>

```python
def put_customer_content_encryption_configuration(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `put_engine_configuration` <a name="put_engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration"></a>

```python
def put_engine_configuration(
  additional_configs: typing.Mapping[str] = None,
  classifications: IResolvable | typing.List[AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications] = None,
  coordinator_dpu_size: typing.Union[int, float] = None,
  default_executor_dpu_size: typing.Union[int, float] = None,
  max_concurrent_dpus: typing.Union[int, float] = None,
  spark_properties: typing.Mapping[str] = None
) -> None
```

###### `additional_configs`<sup>Optional</sup> <a name="additional_configs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.additionalConfigs"></a>

- *Type:* typing.Mapping[str]

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

###### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.classifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications</a>]

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

###### `coordinator_dpu_size`<sup>Optional</sup> <a name="coordinator_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.coordinatorDpuSize"></a>

- *Type:* typing.Union[int, float]

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

###### `default_executor_dpu_size`<sup>Optional</sup> <a name="default_executor_dpu_size" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.defaultExecutorDpuSize"></a>

- *Type:* typing.Union[int, float]

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

###### `max_concurrent_dpus`<sup>Optional</sup> <a name="max_concurrent_dpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.maxConcurrentDpus"></a>

- *Type:* typing.Union[int, float]

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

###### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.sparkProperties"></a>

- *Type:* typing.Mapping[str]

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

##### `put_engine_version` <a name="put_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion"></a>

```python
def put_engine_version(
  selected_engine_version: str = None
) -> None
```

###### `selected_engine_version`<sup>Optional</sup> <a name="selected_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion.parameter.selectedEngineVersion"></a>

- *Type:* str

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

##### `put_managed_query_results_configuration` <a name="put_managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration"></a>

```python
def put_managed_query_results_configuration(
  enabled: bool | IResolvable = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `put_monitoring_configuration` <a name="put_monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration"></a>

```python
def put_monitoring_configuration(
  cloudwatch_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration = None,
  managed_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration = None,
  s3_logging_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration = None
) -> None
```

###### `cloudwatch_logging_configuration`<sup>Optional</sup> <a name="cloudwatch_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.cloudwatchLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

###### `managed_logging_configuration`<sup>Optional</sup> <a name="managed_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.managedLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

###### `s3_logging_configuration`<sup>Optional</sup> <a name="s3_logging_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.s3LoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

##### `put_result_configuration_updates` <a name="put_result_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates"></a>

```python
def put_result_configuration_updates(
  acl_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration = None,
  encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration = None,
  expected_bucket_owner: str = None,
  output_location: str = None,
  remove_acl_configuration: bool | IResolvable = None,
  remove_encryption_configuration: bool | IResolvable = None,
  remove_expected_bucket_owner: bool | IResolvable = None,
  remove_output_location: bool | IResolvable = None
) -> None
```

###### `acl_configuration`<sup>Optional</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.aclConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

###### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

###### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.expectedBucketOwner"></a>

- *Type:* str

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.outputLocation"></a>

- *Type:* str

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

###### `remove_acl_configuration`<sup>Optional</sup> <a name="remove_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.removeAclConfiguration"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}.

---

###### `remove_encryption_configuration`<sup>Optional</sup> <a name="remove_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.removeEncryptionConfiguration"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}.

---

###### `remove_expected_bucket_owner`<sup>Optional</sup> <a name="remove_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.removeExpectedBucketOwner"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}.

---

###### `remove_output_location`<sup>Optional</sup> <a name="remove_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.removeOutputLocation"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}.

---

##### `reset_additional_configuration` <a name="reset_additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration"></a>

```python
def reset_additional_configuration() -> None
```

##### `reset_bytes_scanned_cutoff_per_query` <a name="reset_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery"></a>

```python
def reset_bytes_scanned_cutoff_per_query() -> None
```

##### `reset_customer_content_encryption_configuration` <a name="reset_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```python
def reset_customer_content_encryption_configuration() -> None
```

##### `reset_enforce_work_group_configuration` <a name="reset_enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration"></a>

```python
def reset_enforce_work_group_configuration() -> None
```

##### `reset_engine_configuration` <a name="reset_engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration"></a>

```python
def reset_engine_configuration() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_execution_role` <a name="reset_execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole"></a>

```python
def reset_execution_role() -> None
```

##### `reset_managed_query_results_configuration` <a name="reset_managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration"></a>

```python
def reset_managed_query_results_configuration() -> None
```

##### `reset_monitoring_configuration` <a name="reset_monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration"></a>

```python
def reset_monitoring_configuration() -> None
```

##### `reset_publish_cloudwatch_metrics_enabled` <a name="reset_publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```python
def reset_publish_cloudwatch_metrics_enabled() -> None
```

##### `reset_remove_bytes_scanned_cutoff_per_query` <a name="reset_remove_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery"></a>

```python
def reset_remove_bytes_scanned_cutoff_per_query() -> None
```

##### `reset_remove_customer_content_encryption_configuration` <a name="reset_remove_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration"></a>

```python
def reset_remove_customer_content_encryption_configuration() -> None
```

##### `reset_requester_pays_enabled` <a name="reset_requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled"></a>

```python
def reset_requester_pays_enabled() -> None
```

##### `reset_result_configuration_updates` <a name="reset_result_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates"></a>

```python
def reset_result_configuration_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration">customer_content_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration">engine_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion">engine_version</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration">managed_query_results_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration">monitoring_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates">result_configuration_updates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput">additional_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput">bytes_scanned_cutoff_per_query_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput">customer_content_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput">enforce_work_group_configuration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput">engine_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput">engine_version_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput">execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput">managed_query_results_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput">monitoring_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput">publish_cloudwatch_metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput">remove_bytes_scanned_cutoff_per_query_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput">remove_customer_content_encryption_configuration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput">requester_pays_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput">result_configuration_updates_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration">additional_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery">bytes_scanned_cutoff_per_query</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration">enforce_work_group_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled">publish_cloudwatch_metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery">remove_bytes_scanned_cutoff_per_query</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration">remove_customer_content_encryption_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled">requester_pays_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_content_encryption_configuration`<sup>Required</sup> <a name="customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration"></a>

```python
customer_content_encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `engine_configuration`<sup>Required</sup> <a name="engine_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration"></a>

```python
engine_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a>

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion"></a>

```python
engine_version: AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a>

---

##### `managed_query_results_configuration`<sup>Required</sup> <a name="managed_query_results_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration"></a>

```python
managed_query_results_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a>

---

##### `monitoring_configuration`<sup>Required</sup> <a name="monitoring_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration"></a>

```python
monitoring_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a>

---

##### `result_configuration_updates`<sup>Required</sup> <a name="result_configuration_updates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates"></a>

```python
result_configuration_updates: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a>

---

##### `additional_configuration_input`<sup>Optional</sup> <a name="additional_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput"></a>

```python
additional_configuration_input: str
```

- *Type:* str

---

##### `bytes_scanned_cutoff_per_query_input`<sup>Optional</sup> <a name="bytes_scanned_cutoff_per_query_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```python
bytes_scanned_cutoff_per_query_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_content_encryption_configuration_input`<sup>Optional</sup> <a name="customer_content_encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```python
customer_content_encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `enforce_work_group_configuration_input`<sup>Optional</sup> <a name="enforce_work_group_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```python
enforce_work_group_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine_configuration_input`<sup>Optional</sup> <a name="engine_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput"></a>

```python
engine_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput"></a>

```python
engine_version_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `execution_role_input`<sup>Optional</sup> <a name="execution_role_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput"></a>

```python
execution_role_input: str
```

- *Type:* str

---

##### `managed_query_results_configuration_input`<sup>Optional</sup> <a name="managed_query_results_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput"></a>

```python
managed_query_results_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `monitoring_configuration_input`<sup>Optional</sup> <a name="monitoring_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput"></a>

```python
monitoring_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `publish_cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="publish_cloudwatch_metrics_enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```python
publish_cloudwatch_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_bytes_scanned_cutoff_per_query_input`<sup>Optional</sup> <a name="remove_bytes_scanned_cutoff_per_query_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput"></a>

```python
remove_bytes_scanned_cutoff_per_query_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_customer_content_encryption_configuration_input`<sup>Optional</sup> <a name="remove_customer_content_encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput"></a>

```python
remove_customer_content_encryption_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays_enabled_input`<sup>Optional</sup> <a name="requester_pays_enabled_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput"></a>

```python
requester_pays_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `result_configuration_updates_input`<sup>Optional</sup> <a name="result_configuration_updates_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput"></a>

```python
result_configuration_updates_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `additional_configuration`<sup>Required</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration"></a>

```python
additional_configuration: str
```

- *Type:* str

---

##### `bytes_scanned_cutoff_per_query`<sup>Required</sup> <a name="bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery"></a>

```python
bytes_scanned_cutoff_per_query: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforce_work_group_configuration`<sup>Required</sup> <a name="enforce_work_group_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration"></a>

```python
enforce_work_group_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `publish_cloudwatch_metrics_enabled`<sup>Required</sup> <a name="publish_cloudwatch_metrics_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```python
publish_cloudwatch_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_bytes_scanned_cutoff_per_query`<sup>Required</sup> <a name="remove_bytes_scanned_cutoff_per_query" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery"></a>

```python
remove_bytes_scanned_cutoff_per_query: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_customer_content_encryption_configuration`<sup>Required</sup> <a name="remove_customer_content_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration"></a>

```python
remove_customer_content_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `requester_pays_enabled`<sup>Required</sup> <a name="requester_pays_enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled"></a>

```python
requester_pays_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption">reset_s3_acl_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_acl_option` <a name="reset_s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption"></a>

```python
def reset_s3_acl_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput">s3_acl_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption">s3_acl_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_acl_option_input`<sup>Optional</sup> <a name="s3_acl_option_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```python
s3_acl_option_input: str
```

- *Type:* str

---

##### `s3_acl_option`<sup>Required</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption"></a>

```python
s3_acl_option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption">reset_encryption_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_option` <a name="reset_encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```python
def reset_encryption_option() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput">encryption_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption">encryption_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_option_input`<sup>Optional</sup> <a name="encryption_option_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```python
encryption_option_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `encryption_option`<sup>Required</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```python
encryption_option: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_work_group

athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration">put_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration">reset_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration">reset_remove_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration">reset_remove_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner">reset_remove_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation">reset_remove_output_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_acl_configuration` <a name="put_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration"></a>

```python
def put_acl_configuration(
  s3_acl_option: str = None
) -> None
```

###### `s3_acl_option`<sup>Optional</sup> <a name="s3_acl_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration.parameter.s3AclOption"></a>

- *Type:* str

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  encryption_option: str = None,
  kms_key: str = None
) -> None
```

###### `encryption_option`<sup>Optional</sup> <a name="encryption_option" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration.parameter.encryptionOption"></a>

- *Type:* str

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration.parameter.kmsKey"></a>

- *Type:* str

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `reset_acl_configuration` <a name="reset_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration"></a>

```python
def reset_acl_configuration() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```

##### `reset_remove_acl_configuration` <a name="reset_remove_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration"></a>

```python
def reset_remove_acl_configuration() -> None
```

##### `reset_remove_encryption_configuration` <a name="reset_remove_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration"></a>

```python
def reset_remove_encryption_configuration() -> None
```

##### `reset_remove_expected_bucket_owner` <a name="reset_remove_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner"></a>

```python
def reset_remove_expected_bucket_owner() -> None
```

##### `reset_remove_output_location` <a name="reset_remove_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation"></a>

```python
def reset_remove_output_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration">acl_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput">acl_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput">remove_acl_configuration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput">remove_encryption_configuration_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput">remove_expected_bucket_owner_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput">remove_output_location_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation">output_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration">remove_acl_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration">remove_encryption_configuration</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner">remove_expected_bucket_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation">remove_output_location</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_configuration`<sup>Required</sup> <a name="acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration"></a>

```python
acl_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a>

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration"></a>

```python
encryption_configuration: AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a>

---

##### `acl_configuration_input`<sup>Optional</sup> <a name="acl_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput"></a>

```python
acl_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput"></a>

```python
output_location_input: str
```

- *Type:* str

---

##### `remove_acl_configuration_input`<sup>Optional</sup> <a name="remove_acl_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput"></a>

```python
remove_acl_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_encryption_configuration_input`<sup>Optional</sup> <a name="remove_encryption_configuration_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput"></a>

```python
remove_encryption_configuration_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_expected_bucket_owner_input`<sup>Optional</sup> <a name="remove_expected_bucket_owner_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput"></a>

```python
remove_expected_bucket_owner_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_output_location_input`<sup>Optional</sup> <a name="remove_output_location_input" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput"></a>

```python
remove_output_location_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation"></a>

```python
output_location: str
```

- *Type:* str

---

##### `remove_acl_configuration`<sup>Required</sup> <a name="remove_acl_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration"></a>

```python
remove_acl_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_encryption_configuration`<sup>Required</sup> <a name="remove_encryption_configuration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration"></a>

```python
remove_encryption_configuration: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_expected_bucket_owner`<sup>Required</sup> <a name="remove_expected_bucket_owner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner"></a>

```python
remove_expected_bucket_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `remove_output_location`<sup>Required</sup> <a name="remove_output_location" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation"></a>

```python
remove_output_location: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---



