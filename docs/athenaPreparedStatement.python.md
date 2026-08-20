# `athenaPreparedStatement` Submodule <a name="`athenaPreparedStatement` Submodule" id="@cdktn/provider-awscc.athenaPreparedStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaPreparedStatement <a name="AthenaPreparedStatement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement awscc_athena_prepared_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  query_statement: str,
  statement_name: str,
  work_group: str,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.queryStatement">query_statement</a></code> | <code>str</code> | The query string for the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.statementName">statement_name</a></code> | <code>str</code> | The name of the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.workGroup">work_group</a></code> | <code>str</code> | The name of the workgroup to which the prepared statement belongs. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the prepared statement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.queryStatement"></a>

- *Type:* str

The query string for the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.statementName"></a>

- *Type:* str

The name of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#statement_name AthenaPreparedStatement#statement_name}

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.workGroup"></a>

- *Type:* str

The name of the workgroup to which the prepared statement belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#work_group AthenaPreparedStatement#work_group}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.description"></a>

- *Type:* str

The description of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AthenaPreparedStatement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AthenaPreparedStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AthenaPreparedStatement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AthenaPreparedStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaPreparedStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput">query_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementNameInput">statement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroupInput">work_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement">query_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementName">statement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroup">work_group</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `query_statement_input`<sup>Optional</sup> <a name="query_statement_input" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput"></a>

```python
query_statement_input: str
```

- *Type:* str

---

##### `statement_name_input`<sup>Optional</sup> <a name="statement_name_input" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementNameInput"></a>

```python
statement_name_input: str
```

- *Type:* str

---

##### `work_group_input`<sup>Optional</sup> <a name="work_group_input" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroupInput"></a>

```python
work_group_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaPreparedStatementConfig <a name="AthenaPreparedStatementConfig" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import athena_prepared_statement

athenaPreparedStatement.AthenaPreparedStatementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  query_statement: str,
  statement_name: str,
  work_group: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement">query_statement</a></code> | <code>str</code> | The query string for the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.statementName">statement_name</a></code> | <code>str</code> | The name of the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workGroup">work_group</a></code> | <code>str</code> | The name of the workgroup to which the prepared statement belongs. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description">description</a></code> | <code>str</code> | The description of the prepared statement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `query_statement`<sup>Required</sup> <a name="query_statement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement"></a>

```python
query_statement: str
```

- *Type:* str

The query string for the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

The name of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#statement_name AthenaPreparedStatement#statement_name}

---

##### `work_group`<sup>Required</sup> <a name="work_group" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workGroup"></a>

```python
work_group: str
```

- *Type:* str

The name of the workgroup to which the prepared statement belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#work_group AthenaPreparedStatement#work_group}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}

---



