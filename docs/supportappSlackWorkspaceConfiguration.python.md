# `supportappSlackWorkspaceConfiguration` Submodule <a name="`supportappSlackWorkspaceConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackWorkspaceConfiguration <a name="SupportappSlackWorkspaceConfiguration" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration awscc_supportapp_slack_workspace_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  team_id: str,
  version_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | An identifier used to update an existing Slack workspace configuration in AWS CloudFormation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.teamId"></a>

- *Type:* str

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration#team_id SupportappSlackWorkspaceConfiguration#team_id}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.versionId"></a>

- *Type:* str

An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration#version_id SupportappSlackWorkspaceConfiguration#version_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId"></a>

```python
def reset_version_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SupportappSlackWorkspaceConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SupportappSlackWorkspaceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackWorkspaceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackWorkspaceConfigurationConfig <a name="SupportappSlackWorkspaceConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import supportapp_slack_workspace_configuration

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  team_id: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId">team_id</a></code> | <code>str</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId">version_id</a></code> | <code>str</code> | An identifier used to update an existing Slack workspace configuration in AWS CloudFormation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration#team_id SupportappSlackWorkspaceConfiguration#team_id}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/supportapp_slack_workspace_configuration#version_id SupportappSlackWorkspaceConfiguration#version_id}

---



