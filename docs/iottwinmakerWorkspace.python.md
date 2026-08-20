# `iottwinmakerWorkspace` Submodule <a name="`iottwinmakerWorkspace` Submodule" id="@cdktn/provider-awscc.iottwinmakerWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerWorkspace <a name="IottwinmakerWorkspace" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace awscc_iottwinmaker_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  s3_location: str,
  workspace_id: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.role">role</a></code> | <code>str</code> | The ARN of the execution role associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.s3Location">s3_location</a></code> | <code>str</code> | The ARN of the S3 bucket where resources associated with the workspace are stored. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | The ID of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.role"></a>

- *Type:* str

The ARN of the execution role associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#role IottwinmakerWorkspace#role}

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.s3Location"></a>

- *Type:* str

The ARN of the S3 bucket where resources associated with the workspace are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#s3_location IottwinmakerWorkspace#s3_location}

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.workspaceId"></a>

- *Type:* str

The ID of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#workspace_id IottwinmakerWorkspace#workspace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.description"></a>

- *Type:* str

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#description IottwinmakerWorkspace#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A map of key-value pairs to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#tags IottwinmakerWorkspace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IottwinmakerWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isConstruct"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IottwinmakerWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IottwinmakerWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IottwinmakerWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.creationDateTime">creation_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.updateDateTime">update_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.s3LocationInput">s3_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.s3Location">s3_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date_time`<sup>Required</sup> <a name="creation_date_time" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.creationDateTime"></a>

```python
creation_date_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `update_date_time`<sup>Required</sup> <a name="update_date_time" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.updateDateTime"></a>

```python
update_date_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.s3LocationInput"></a>

```python
s3_location_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.s3Location"></a>

```python
s3_location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerWorkspaceConfig <a name="IottwinmakerWorkspaceConfig" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iottwinmaker_workspace

iottwinmakerWorkspace.IottwinmakerWorkspaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role: str,
  s3_location: str,
  workspace_id: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.role">role</a></code> | <code>str</code> | The ARN of the execution role associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.s3Location">s3_location</a></code> | <code>str</code> | The ARN of the S3 bucket where resources associated with the workspace are stored. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | The ID of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.description">description</a></code> | <code>str</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A map of key-value pairs to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The ARN of the execution role associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#role IottwinmakerWorkspace#role}

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.s3Location"></a>

```python
s3_location: str
```

- *Type:* str

The ARN of the S3 bucket where resources associated with the workspace are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#s3_location IottwinmakerWorkspace#s3_location}

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

The ID of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#workspace_id IottwinmakerWorkspace#workspace_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#description IottwinmakerWorkspace#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iottwinmakerWorkspace.IottwinmakerWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of key-value pairs to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_workspace#tags IottwinmakerWorkspace#tags}

---



