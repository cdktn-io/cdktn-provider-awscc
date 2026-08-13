# `neptuneDbClusterParameterGroup` Submodule <a name="`neptuneDbClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneDbClusterParameterGroup <a name="NeptuneDbClusterParameterGroup" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group awscc_neptune_db_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  family: str,
  parameters: str,
  name: str = None,
  tags: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Provides the customer-specified description for this DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.family">family</a></code> | <code>str</code> | Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.parameters">parameters</a></code> | <code>str</code> | An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]</code> | The list of tags for the cluster parameter group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.description"></a>

- *Type:* str

Provides the customer-specified description for this DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#description NeptuneDbClusterParameterGroup#description}

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.family"></a>

- *Type:* str

Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#family NeptuneDbClusterParameterGroup#family}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.parameters"></a>

- *Type:* str

An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#parameters NeptuneDbClusterParameterGroup#parameters}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.name"></a>

- *Type:* str

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#name NeptuneDbClusterParameterGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#tags NeptuneDbClusterParameterGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NeptuneDbClusterParameterGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NeptuneDbClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneDbClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList">NeptuneDbClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tags"></a>

```python
tags: NeptuneDbClusterParameterGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList">NeptuneDbClusterParameterGroupTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneDbClusterParameterGroupConfig <a name="NeptuneDbClusterParameterGroupConfig" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  family: str,
  parameters: str,
  name: str = None,
  tags: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.description">description</a></code> | <code>str</code> | Provides the customer-specified description for this DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.family">family</a></code> | <code>str</code> | Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.parameters">parameters</a></code> | <code>str</code> | An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.name">name</a></code> | <code>str</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]</code> | The list of tags for the cluster parameter group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Provides the customer-specified description for this DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#description NeptuneDbClusterParameterGroup#description}

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#family NeptuneDbClusterParameterGroup#family}

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#parameters NeptuneDbClusterParameterGroup#parameters}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#name NeptuneDbClusterParameterGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#tags NeptuneDbClusterParameterGroup#tags}

---

### NeptuneDbClusterParameterGroupTags <a name="NeptuneDbClusterParameterGroupTags" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#key NeptuneDbClusterParameterGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/neptune_db_cluster_parameter_group#value NeptuneDbClusterParameterGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDbClusterParameterGroupTagsList <a name="NeptuneDbClusterParameterGroupTagsList" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptuneDbClusterParameterGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NeptuneDbClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>]

---


### NeptuneDbClusterParameterGroupTagsOutputReference <a name="NeptuneDbClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster_parameter_group

neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptuneDbClusterParameterGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbClusterParameterGroup.NeptuneDbClusterParameterGroupTags">NeptuneDbClusterParameterGroupTags</a>

---



