# `rdsOptionGroup` Submodule <a name="`rdsOptionGroup` Submodule" id="@cdktn/provider-awscc.rdsOptionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsOptionGroup <a name="RdsOptionGroup" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group awscc_rds_option_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_name: str,
  major_engine_version: str,
  option_group_description: str,
  option_configurations: IResolvable | typing.List[RdsOptionGroupOptionConfigurations] = None,
  option_group_name: str = None,
  tags: IResolvable | typing.List[RdsOptionGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.engineName">engine_name</a></code> | <code>str</code> | Specifies the name of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Specifies the major version of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupDescription">option_group_description</a></code> | <code>str</code> | The description of the option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionConfigurations">option_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]</code> | A list of all available options for an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupName">option_group_name</a></code> | <code>str</code> | The name of the option group to be created. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]</code> | Tags to assign to the option group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.engineName"></a>

- *Type:* str

Specifies the name of the engine that this option group should be associated with.

Valid Values:

* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.majorEngineVersion"></a>

- *Type:* str

Specifies the major version of the engine that this option group should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}

---

##### `option_group_description`<sup>Required</sup> <a name="option_group_description" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupDescription"></a>

- *Type:* str

The description of the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}

---

##### `option_configurations`<sup>Optional</sup> <a name="option_configurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]

A list of all available options for an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.optionGroupName"></a>

- *Type:* str

The name of the option group to be created.

Constraints:

* Must be 1 to 255 letters, numbers, or hyphens
* First character must be a letter
* Can't end with a hyphen or contain two consecutive hyphens

Example: `myoptiongroup`
If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]

Tags to assign to the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations">put_option_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations">reset_option_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName">reset_option_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_option_configurations` <a name="put_option_configurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations"></a>

```python
def put_option_configurations(
  value: IResolvable | typing.List[RdsOptionGroupOptionConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putOptionConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsOptionGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]

---

##### `reset_option_configurations` <a name="reset_option_configurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionConfigurations"></a>

```python
def reset_option_configurations() -> None
```

##### `reset_option_group_name` <a name="reset_option_group_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetOptionGroupName"></a>

```python
def reset_option_group_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsOptionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsOptionGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsOptionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsOptionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations">option_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput">engine_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput">major_engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput">option_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput">option_group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput">option_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName">engine_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription">option_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName">option_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `option_configurations`<sup>Required</sup> <a name="option_configurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurations"></a>

```python
option_configurations: RdsOptionGroupOptionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList">RdsOptionGroupOptionConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tags"></a>

```python
tags: RdsOptionGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList">RdsOptionGroupTagsList</a>

---

##### `engine_name_input`<sup>Optional</sup> <a name="engine_name_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineNameInput"></a>

```python
engine_name_input: str
```

- *Type:* str

---

##### `major_engine_version_input`<sup>Optional</sup> <a name="major_engine_version_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersionInput"></a>

```python
major_engine_version_input: str
```

- *Type:* str

---

##### `option_configurations_input`<sup>Optional</sup> <a name="option_configurations_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionConfigurationsInput"></a>

```python
option_configurations_input: IResolvable | typing.List[RdsOptionGroupOptionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]

---

##### `option_group_description_input`<sup>Optional</sup> <a name="option_group_description_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescriptionInput"></a>

```python
option_group_description_input: str
```

- *Type:* str

---

##### `option_group_name_input`<sup>Optional</sup> <a name="option_group_name_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupNameInput"></a>

```python
option_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsOptionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

---

##### `option_group_description`<sup>Required</sup> <a name="option_group_description" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupDescription"></a>

```python
option_group_description: str
```

- *Type:* str

---

##### `option_group_name`<sup>Required</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsOptionGroupConfig <a name="RdsOptionGroupConfig" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_name: str,
  major_engine_version: str,
  option_group_description: str,
  option_configurations: IResolvable | typing.List[RdsOptionGroupOptionConfigurations] = None,
  option_group_name: str = None,
  tags: IResolvable | typing.List[RdsOptionGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName">engine_name</a></code> | <code>str</code> | Specifies the name of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | Specifies the major version of the engine that this option group should be associated with. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription">option_group_description</a></code> | <code>str</code> | The description of the option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations">option_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]</code> | A list of all available options for an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName">option_group_name</a></code> | <code>str</code> | The name of the option group to be created. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]</code> | Tags to assign to the option group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_name`<sup>Required</sup> <a name="engine_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.engineName"></a>

```python
engine_name: str
```

- *Type:* str

Specifies the name of the engine that this option group should be associated with.

Valid Values:

* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#engine_name RdsOptionGroup#engine_name}

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

Specifies the major version of the engine that this option group should be associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#major_engine_version RdsOptionGroup#major_engine_version}

---

##### `option_group_description`<sup>Required</sup> <a name="option_group_description" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupDescription"></a>

```python
option_group_description: str
```

- *Type:* str

The description of the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_group_description RdsOptionGroup#option_group_description}

---

##### `option_configurations`<sup>Optional</sup> <a name="option_configurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionConfigurations"></a>

```python
option_configurations: IResolvable | typing.List[RdsOptionGroupOptionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]

A list of all available options for an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_configurations RdsOptionGroup#option_configurations}

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

The name of the option group to be created.

Constraints:

* Must be 1 to 255 letters, numbers, or hyphens
* First character must be a letter
* Can't end with a hyphen or contain two consecutive hyphens

Example: `myoptiongroup`
If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_group_name RdsOptionGroup#option_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsOptionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]

Tags to assign to the option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#tags RdsOptionGroup#tags}

---

### RdsOptionGroupOptionConfigurations <a name="RdsOptionGroupOptionConfigurations" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurations(
  db_security_group_memberships: typing.List[str] = None,
  option_name: str = None,
  option_settings: IResolvable | typing.List[RdsOptionGroupOptionConfigurationsOptionSettings] = None,
  option_version: str = None,
  port: typing.Union[int, float] = None,
  vpc_security_group_memberships: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships">db_security_group_memberships</a></code> | <code>typing.List[str]</code> | A list of DB security groups used for this option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName">option_name</a></code> | <code>str</code> | The configuration of options to include in a group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings">option_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]</code> | The option settings to include in an option group. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion">option_version</a></code> | <code>str</code> | The version for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The optional port for the option. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships">vpc_security_group_memberships</a></code> | <code>typing.List[str]</code> | A list of VPC security group names used for this option. |

---

##### `db_security_group_memberships`<sup>Optional</sup> <a name="db_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.dbSecurityGroupMemberships"></a>

```python
db_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

A list of DB security groups used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#db_security_group_memberships RdsOptionGroup#db_security_group_memberships}

---

##### `option_name`<sup>Optional</sup> <a name="option_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

The configuration of options to include in a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_name RdsOptionGroup#option_name}

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionSettings"></a>

```python
option_settings: IResolvable | typing.List[RdsOptionGroupOptionConfigurationsOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]

The option settings to include in an option group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_settings RdsOptionGroup#option_settings}

---

##### `option_version`<sup>Optional</sup> <a name="option_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.optionVersion"></a>

```python
option_version: str
```

- *Type:* str

The version for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#option_version RdsOptionGroup#option_version}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The optional port for the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#port RdsOptionGroup#port}

---

##### `vpc_security_group_memberships`<sup>Optional</sup> <a name="vpc_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations.property.vpcSecurityGroupMemberships"></a>

```python
vpc_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC security group names used for this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#vpc_security_group_memberships RdsOptionGroup#vpc_security_group_memberships}

---

### RdsOptionGroupOptionConfigurationsOptionSettings <a name="RdsOptionGroupOptionConfigurationsOptionSettings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name">name</a></code> | <code>str</code> | The name of the option that has settings that you can set. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value">value</a></code> | <code>str</code> | The current value of the option setting. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the option that has settings that you can set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#name RdsOptionGroup#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings.property.value"></a>

```python
value: str
```

- *Type:* str

The current value of the option setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

### RdsOptionGroupTags <a name="RdsOptionGroupTags" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key">key</a></code> | <code>str</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value">value</a></code> | <code>str</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#key RdsOptionGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_option_group#value RdsOptionGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsOptionGroupOptionConfigurationsList <a name="RdsOptionGroupOptionConfigurationsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsOptionGroupOptionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsOptionGroupOptionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>]

---


### RdsOptionGroupOptionConfigurationsOptionSettingsList <a name="RdsOptionGroupOptionConfigurationsOptionSettingsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsOptionGroupOptionConfigurationsOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]

---


### RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference <a name="RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsOptionGroupOptionConfigurationsOptionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>

---


### RdsOptionGroupOptionConfigurationsOutputReference <a name="RdsOptionGroupOptionConfigurationsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings">put_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships">reset_db_security_group_memberships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName">reset_option_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings">reset_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion">reset_option_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships">reset_vpc_security_group_memberships</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_option_settings` <a name="put_option_settings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings"></a>

```python
def put_option_settings(
  value: IResolvable | typing.List[RdsOptionGroupOptionConfigurationsOptionSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.putOptionSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]

---

##### `reset_db_security_group_memberships` <a name="reset_db_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetDbSecurityGroupMemberships"></a>

```python
def reset_db_security_group_memberships() -> None
```

##### `reset_option_name` <a name="reset_option_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionName"></a>

```python
def reset_option_name() -> None
```

##### `reset_option_settings` <a name="reset_option_settings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionSettings"></a>

```python
def reset_option_settings() -> None
```

##### `reset_option_version` <a name="reset_option_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetOptionVersion"></a>

```python
def reset_option_version() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_vpc_security_group_memberships` <a name="reset_vpc_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.resetVpcSecurityGroupMemberships"></a>

```python
def reset_vpc_security_group_memberships() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings">option_settings</a></code> | <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput">db_security_group_memberships_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput">option_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput">option_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput">option_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput">vpc_security_group_memberships_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships">db_security_group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName">option_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion">option_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships">vpc_security_group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_settings`<sup>Required</sup> <a name="option_settings" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettings"></a>

```python
option_settings: RdsOptionGroupOptionConfigurationsOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettingsList">RdsOptionGroupOptionConfigurationsOptionSettingsList</a>

---

##### `db_security_group_memberships_input`<sup>Optional</sup> <a name="db_security_group_memberships_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMembershipsInput"></a>

```python
db_security_group_memberships_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_name_input`<sup>Optional</sup> <a name="option_name_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionNameInput"></a>

```python
option_name_input: str
```

- *Type:* str

---

##### `option_settings_input`<sup>Optional</sup> <a name="option_settings_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionSettingsInput"></a>

```python
option_settings_input: IResolvable | typing.List[RdsOptionGroupOptionConfigurationsOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOptionSettings">RdsOptionGroupOptionConfigurationsOptionSettings</a>]

---

##### `option_version_input`<sup>Optional</sup> <a name="option_version_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersionInput"></a>

```python
option_version_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_security_group_memberships_input`<sup>Optional</sup> <a name="vpc_security_group_memberships_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMembershipsInput"></a>

```python
vpc_security_group_memberships_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_security_group_memberships`<sup>Required</sup> <a name="db_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.dbSecurityGroupMemberships"></a>

```python
db_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_name`<sup>Required</sup> <a name="option_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

---

##### `option_version`<sup>Required</sup> <a name="option_version" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.optionVersion"></a>

```python
option_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_security_group_memberships`<sup>Required</sup> <a name="vpc_security_group_memberships" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.vpcSecurityGroupMemberships"></a>

```python
vpc_security_group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsOptionGroupOptionConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupOptionConfigurations">RdsOptionGroupOptionConfigurations</a>

---


### RdsOptionGroupTagsList <a name="RdsOptionGroupTagsList" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsOptionGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsOptionGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>]

---


### RdsOptionGroupTagsOutputReference <a name="RdsOptionGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_option_group

rdsOptionGroup.RdsOptionGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsOptionGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsOptionGroup.RdsOptionGroupTags">RdsOptionGroupTags</a>

---



