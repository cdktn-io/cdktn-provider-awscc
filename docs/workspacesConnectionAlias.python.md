# `workspacesConnectionAlias` Submodule <a name="`workspacesConnectionAlias` Submodule" id="@cdktn/provider-awscc.workspacesConnectionAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesConnectionAlias <a name="WorkspacesConnectionAlias" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias awscc_workspaces_connection_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  tags: IResolvable | typing.List[WorkspacesConnectionAliasTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#connection_string WorkspacesConnectionAlias#connection_string}. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#tags WorkspacesConnectionAlias#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#connection_string WorkspacesConnectionAlias#connection_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#tags WorkspacesConnectionAlias#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspacesConnectionAliasTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspacesConnectionAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspacesConnectionAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspacesConnectionAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspacesConnectionAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesConnectionAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.aliasId">alias_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.associations">associations</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList">WorkspacesConnectionAliasAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionAliasState">connection_alias_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList">WorkspacesConnectionAliasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_id`<sup>Required</sup> <a name="alias_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.aliasId"></a>

```python
alias_id: str
```

- *Type:* str

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.associations"></a>

```python
associations: WorkspacesConnectionAliasAssociationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList">WorkspacesConnectionAliasAssociationsList</a>

---

##### `connection_alias_state`<sup>Required</sup> <a name="connection_alias_state" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionAliasState"></a>

```python
connection_alias_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tags"></a>

```python
tags: WorkspacesConnectionAliasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList">WorkspacesConnectionAliasTagsList</a>

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspacesConnectionAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesConnectionAliasAssociations <a name="WorkspacesConnectionAliasAssociations" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociations.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasAssociations()
```


### WorkspacesConnectionAliasConfig <a name="WorkspacesConnectionAliasConfig" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_string: str,
  tags: IResolvable | typing.List[WorkspacesConnectionAliasTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#connection_string WorkspacesConnectionAlias#connection_string}. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#tags WorkspacesConnectionAlias#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#connection_string WorkspacesConnectionAlias#connection_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspacesConnectionAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#tags WorkspacesConnectionAlias#tags}.

---

### WorkspacesConnectionAliasTags <a name="WorkspacesConnectionAliasTags" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#key WorkspacesConnectionAlias#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#value WorkspacesConnectionAlias#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#key WorkspacesConnectionAlias#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspaces_connection_alias#value WorkspacesConnectionAlias#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesConnectionAliasAssociationsList <a name="WorkspacesConnectionAliasAssociationsList" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesConnectionAliasAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkspacesConnectionAliasAssociationsOutputReference <a name="WorkspacesConnectionAliasAssociationsOutputReference" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.associatedAccountId">associated_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.associationStatus">association_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.connectionIdentifier">connection_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociations">WorkspacesConnectionAliasAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_account_id`<sup>Required</sup> <a name="associated_account_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.associatedAccountId"></a>

```python
associated_account_id: str
```

- *Type:* str

---

##### `association_status`<sup>Required</sup> <a name="association_status" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.associationStatus"></a>

```python
association_status: str
```

- *Type:* str

---

##### `connection_identifier`<sup>Required</sup> <a name="connection_identifier" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.connectionIdentifier"></a>

```python
connection_identifier: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesConnectionAliasAssociations
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasAssociations">WorkspacesConnectionAliasAssociations</a>

---


### WorkspacesConnectionAliasTagsList <a name="WorkspacesConnectionAliasTagsList" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspacesConnectionAliasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspacesConnectionAliasTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>]

---


### WorkspacesConnectionAliasTagsOutputReference <a name="WorkspacesConnectionAliasTagsOutputReference" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspaces_connection_alias

workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspacesConnectionAliasTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspacesConnectionAlias.WorkspacesConnectionAliasTags">WorkspacesConnectionAliasTags</a>

---



