# `redshiftClusterParameterGroup` Submodule <a name="`redshiftClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.redshiftClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftClusterParameterGroup <a name="RedshiftClusterParameterGroup" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group awscc_redshift_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroup(
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
  parameter_group_family: str,
  parameter_group_name: str = None,
  parameters: IResolvable | typing.List[RedshiftClusterParameterGroupParameters] = None,
  tags: IResolvable | typing.List[RedshiftClusterParameterGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | The Amazon Redshift engine version to which the cluster parameter group applies. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | The name of the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]</code> | An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.description"></a>

- *Type:* str

A description of the parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#description RedshiftClusterParameterGroup#description}

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameterGroupFamily"></a>

- *Type:* str

The Amazon Redshift engine version to which the cluster parameter group applies.

The cluster engine version determines the set of parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_group_family RedshiftClusterParameterGroup#parameter_group_family}

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameterGroupName"></a>

- *Type:* str

The name of the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_group_name RedshiftClusterParameterGroup#parameter_group_name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]

An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameters RedshiftClusterParameterGroup#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#tags RedshiftClusterParameterGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetParameterGroupName">reset_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[RedshiftClusterParameterGroupParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftClusterParameterGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]

---

##### `reset_parameter_group_name` <a name="reset_parameter_group_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetParameterGroupName"></a>

```python
def reset_parameter_group_name() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftClusterParameterGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList">RedshiftClusterParameterGroupParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList">RedshiftClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupFamilyInput">parameter_group_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupNameInput">parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameters"></a>

```python
parameters: RedshiftClusterParameterGroupParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList">RedshiftClusterParameterGroupParametersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tags"></a>

```python
tags: RedshiftClusterParameterGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList">RedshiftClusterParameterGroupTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `parameter_group_family_input`<sup>Optional</sup> <a name="parameter_group_family_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupFamilyInput"></a>

```python
parameter_group_family_input: str
```

- *Type:* str

---

##### `parameter_group_name_input`<sup>Optional</sup> <a name="parameter_group_name_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupNameInput"></a>

```python
parameter_group_name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[RedshiftClusterParameterGroupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

---

##### `parameter_group_name`<sup>Required</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterParameterGroupConfig <a name="RedshiftClusterParameterGroupConfig" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  parameter_group_family: str,
  parameter_group_name: str = None,
  parameters: IResolvable | typing.List[RedshiftClusterParameterGroupParameters] = None,
  tags: IResolvable | typing.List[RedshiftClusterParameterGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.description">description</a></code> | <code>str</code> | A description of the parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | The Amazon Redshift engine version to which the cluster parameter group applies. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameterGroupName">parameter_group_name</a></code> | <code>str</code> | The name of the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]</code> | An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#description RedshiftClusterParameterGroup#description}

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

The Amazon Redshift engine version to which the cluster parameter group applies.

The cluster engine version determines the set of parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_group_family RedshiftClusterParameterGroup#parameter_group_family}

---

##### `parameter_group_name`<sup>Optional</sup> <a name="parameter_group_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameterGroupName"></a>

```python
parameter_group_name: str
```

- *Type:* str

The name of the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_group_name RedshiftClusterParameterGroup#parameter_group_name}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.List[RedshiftClusterParameterGroupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]

An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameters RedshiftClusterParameterGroup#parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#tags RedshiftClusterParameterGroup#tags}

---

### RedshiftClusterParameterGroupParameters <a name="RedshiftClusterParameterGroupParameters" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | The name of the parameter. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_name RedshiftClusterParameterGroup#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#parameter_value RedshiftClusterParameterGroup#parameter_value}

---

### RedshiftClusterParameterGroupTags <a name="RedshiftClusterParameterGroupTags" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#key RedshiftClusterParameterGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshift_cluster_parameter_group#value RedshiftClusterParameterGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterParameterGroupParametersList <a name="RedshiftClusterParameterGroupParametersList" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftClusterParameterGroupParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftClusterParameterGroupParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>]

---


### RedshiftClusterParameterGroupParametersOutputReference <a name="RedshiftClusterParameterGroupParametersOutputReference" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftClusterParameterGroupParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupParameters">RedshiftClusterParameterGroupParameters</a>

---


### RedshiftClusterParameterGroupTagsList <a name="RedshiftClusterParameterGroupTagsList" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftClusterParameterGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftClusterParameterGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>]

---


### RedshiftClusterParameterGroupTagsOutputReference <a name="RedshiftClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster_parameter_group

redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftClusterParameterGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftClusterParameterGroup.RedshiftClusterParameterGroupTags">RedshiftClusterParameterGroupTags</a>

---



