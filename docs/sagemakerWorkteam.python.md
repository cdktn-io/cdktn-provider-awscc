# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktn/provider-awscc.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam awscc_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteam(
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
  member_definitions: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions],
  notification_configuration: SagemakerWorkteamNotificationConfiguration = None,
  tags: IResolvable | typing.List[SagemakerWorkteamTags] = None,
  workforce_name: str = None,
  workteam_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.memberDefinitions">member_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]</code> | A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | Configures SNS notifications of available or expiring work items for work teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.workforceName">workforce_name</a></code> | <code>str</code> | The name of the Workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.workteamName">workteam_name</a></code> | <code>str</code> | The name of the work team. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.description"></a>

- *Type:* str

A description of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}

---

##### `member_definitions`<sup>Required</sup> <a name="member_definitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.memberDefinitions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]

A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#member_definitions SagemakerWorkteam#member_definitions}

---

##### `notification_configuration`<sup>Optional</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.notificationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

Configures SNS notifications of available or expiring work items for work teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}

---

##### `workforce_name`<sup>Optional</sup> <a name="workforce_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.workforceName"></a>

- *Type:* str

The name of the Workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}

---

##### `workteam_name`<sup>Optional</sup> <a name="workteam_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.workteamName"></a>

- *Type:* str

The name of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions">put_member_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">put_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">reset_notification_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName">reset_workforce_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName">reset_workteam_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_member_definitions` <a name="put_member_definitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions"></a>

```python
def put_member_definitions(
  value: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]

---

##### `put_notification_configuration` <a name="put_notification_configuration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```python
def put_notification_configuration(
  notification_topic_arn: str = None
) -> None
```

###### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.notificationTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerWorkteamTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]

---

##### `reset_notification_configuration` <a name="reset_notification_configuration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```python
def reset_notification_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_workforce_name` <a name="reset_workforce_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName"></a>

```python
def reset_workforce_name() -> None
```

##### `reset_workteam_name` <a name="reset_workteam_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName"></a>

```python
def reset_workteam_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteam.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteam.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteam.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteam.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerWorkteam to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerWorkteam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerWorkteam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions">member_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn">workteam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput">member_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">notification_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">workforce_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">workteam_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">workforce_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">workteam_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_definitions`<sup>Required</sup> <a name="member_definitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions"></a>

```python
member_definitions: SagemakerWorkteamMemberDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a>

---

##### `notification_configuration`<sup>Required</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```python
notification_configuration: SagemakerWorkteamNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```python
tags: SagemakerWorkteamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a>

---

##### `workteam_arn`<sup>Required</sup> <a name="workteam_arn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn"></a>

```python
workteam_arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `member_definitions_input`<sup>Optional</sup> <a name="member_definitions_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput"></a>

```python
member_definitions_input: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]

---

##### `notification_configuration_input`<sup>Optional</sup> <a name="notification_configuration_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```python
notification_configuration_input: IResolvable | SagemakerWorkteamNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerWorkteamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]

---

##### `workforce_name_input`<sup>Optional</sup> <a name="workforce_name_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```python
workforce_name_input: str
```

- *Type:* str

---

##### `workteam_name_input`<sup>Optional</sup> <a name="workteam_name_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```python
workteam_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `workforce_name`<sup>Required</sup> <a name="workforce_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```python
workforce_name: str
```

- *Type:* str

---

##### `workteam_name`<sup>Required</sup> <a name="workteam_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```python
workteam_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  member_definitions: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions],
  notification_configuration: SagemakerWorkteamNotificationConfiguration = None,
  tags: IResolvable | typing.List[SagemakerWorkteamTags] = None,
  workforce_name: str = None,
  workteam_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">description</a></code> | <code>str</code> | A description of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions">member_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]</code> | A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">notification_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | Configures SNS notifications of available or expiring work items for work teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">workforce_name</a></code> | <code>str</code> | The name of the Workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">workteam_name</a></code> | <code>str</code> | The name of the work team. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}

---

##### `member_definitions`<sup>Required</sup> <a name="member_definitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions"></a>

```python
member_definitions: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]

A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#member_definitions SagemakerWorkteam#member_definitions}

---

##### `notification_configuration`<sup>Optional</sup> <a name="notification_configuration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```python
notification_configuration: SagemakerWorkteamNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

Configures SNS notifications of available or expiring work items for work teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerWorkteamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}

---

##### `workforce_name`<sup>Optional</sup> <a name="workforce_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```python
workforce_name: str
```

- *Type:* str

The name of the Workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}

---

##### `workteam_name`<sup>Optional</sup> <a name="workteam_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```python
workteam_name: str
```

- *Type:* str

The name of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}

---

### SagemakerWorkteamMemberDefinitions <a name="SagemakerWorkteamMemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitions(
  cognito_member_definition: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition = None,
  oidc_member_definition: SagemakerWorkteamMemberDefinitionsOidcMemberDefinition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition">cognito_member_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | The Amazon Cognito user group that is part of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition">oidc_member_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | A list user groups that exist in your OIDC Identity Provider (IdP). |

---

##### `cognito_member_definition`<sup>Optional</sup> <a name="cognito_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition"></a>

```python
cognito_member_definition: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

The Amazon Cognito user group that is part of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `oidc_member_definition`<sup>Optional</sup> <a name="oidc_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition"></a>

```python
oidc_member_definition: SagemakerWorkteamMemberDefinitionsOidcMemberDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

A list user groups that exist in your OIDC Identity Provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition(
  cognito_client_id: str = None,
  cognito_user_group: str = None,
  cognito_user_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId">cognito_client_id</a></code> | <code>str</code> | An identifier for an application client. You must create the app client ID using Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup">cognito_user_group</a></code> | <code>str</code> | An identifier for a user group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool">cognito_user_pool</a></code> | <code>str</code> | An identifier for a user pool. |

---

##### `cognito_client_id`<sup>Optional</sup> <a name="cognito_client_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId"></a>

```python
cognito_client_id: str
```

- *Type:* str

An identifier for an application client. You must create the app client ID using Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_client_id SagemakerWorkteam#cognito_client_id}

---

##### `cognito_user_group`<sup>Optional</sup> <a name="cognito_user_group" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup"></a>

```python
cognito_user_group: str
```

- *Type:* str

An identifier for a user group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_user_group SagemakerWorkteam#cognito_user_group}

---

##### `cognito_user_pool`<sup>Optional</sup> <a name="cognito_user_pool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool"></a>

```python
cognito_user_pool: str
```

- *Type:* str

An identifier for a user pool.

The user pool must be in the same region as the service that you are calling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_user_pool SagemakerWorkteam#cognito_user_pool}

---

### SagemakerWorkteamMemberDefinitionsOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition(
  oidc_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups">oidc_groups</a></code> | <code>typing.List[str]</code> | A list of OIDC group names whose members will be part of this workteam. |

---

##### `oidc_groups`<sup>Optional</sup> <a name="oidc_groups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups"></a>

```python
oidc_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of OIDC group names whose members will be part of this workteam.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#oidc_groups SagemakerWorkteam#oidc_groups}

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration(
  notification_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published. |

---

##### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}

---

### SagemakerWorkteamTags <a name="SagemakerWorkteamTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#key SagemakerWorkteam#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#value SagemakerWorkteam#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId">reset_cognito_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup">reset_cognito_user_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool">reset_cognito_user_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cognito_client_id` <a name="reset_cognito_client_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId"></a>

```python
def reset_cognito_client_id() -> None
```

##### `reset_cognito_user_group` <a name="reset_cognito_user_group" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup"></a>

```python
def reset_cognito_user_group() -> None
```

##### `reset_cognito_user_pool` <a name="reset_cognito_user_pool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool"></a>

```python
def reset_cognito_user_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput">cognito_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput">cognito_user_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput">cognito_user_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId">cognito_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup">cognito_user_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool">cognito_user_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_client_id_input`<sup>Optional</sup> <a name="cognito_client_id_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput"></a>

```python
cognito_client_id_input: str
```

- *Type:* str

---

##### `cognito_user_group_input`<sup>Optional</sup> <a name="cognito_user_group_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput"></a>

```python
cognito_user_group_input: str
```

- *Type:* str

---

##### `cognito_user_pool_input`<sup>Optional</sup> <a name="cognito_user_pool_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput"></a>

```python
cognito_user_pool_input: str
```

- *Type:* str

---

##### `cognito_client_id`<sup>Required</sup> <a name="cognito_client_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId"></a>

```python
cognito_client_id: str
```

- *Type:* str

---

##### `cognito_user_group`<sup>Required</sup> <a name="cognito_user_group" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup"></a>

```python
cognito_user_group: str
```

- *Type:* str

---

##### `cognito_user_pool`<sup>Required</sup> <a name="cognito_user_pool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool"></a>

```python
cognito_user_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionsList <a name="SagemakerWorkteamMemberDefinitionsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerWorkteamMemberDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerWorkteamMemberDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>]

---


### SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups">reset_oidc_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oidc_groups` <a name="reset_oidc_groups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups"></a>

```python
def reset_oidc_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput">oidc_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups">oidc_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oidc_groups_input`<sup>Optional</sup> <a name="oidc_groups_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput"></a>

```python
oidc_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oidc_groups`<sup>Required</sup> <a name="oidc_groups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups"></a>

```python
oidc_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerWorkteamMemberDefinitionsOidcMemberDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionsOutputReference <a name="SagemakerWorkteamMemberDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition">put_cognito_member_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition">put_oidc_member_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition">reset_cognito_member_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition">reset_oidc_member_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cognito_member_definition` <a name="put_cognito_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition"></a>

```python
def put_cognito_member_definition(
  cognito_client_id: str = None,
  cognito_user_group: str = None,
  cognito_user_pool: str = None
) -> None
```

###### `cognito_client_id`<sup>Optional</sup> <a name="cognito_client_id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition.parameter.cognitoClientId"></a>

- *Type:* str

An identifier for an application client. You must create the app client ID using Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_client_id SagemakerWorkteam#cognito_client_id}

---

###### `cognito_user_group`<sup>Optional</sup> <a name="cognito_user_group" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition.parameter.cognitoUserGroup"></a>

- *Type:* str

An identifier for a user group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_user_group SagemakerWorkteam#cognito_user_group}

---

###### `cognito_user_pool`<sup>Optional</sup> <a name="cognito_user_pool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition.parameter.cognitoUserPool"></a>

- *Type:* str

An identifier for a user pool.

The user pool must be in the same region as the service that you are calling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#cognito_user_pool SagemakerWorkteam#cognito_user_pool}

---

##### `put_oidc_member_definition` <a name="put_oidc_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition"></a>

```python
def put_oidc_member_definition(
  oidc_groups: typing.List[str] = None
) -> None
```

###### `oidc_groups`<sup>Optional</sup> <a name="oidc_groups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition.parameter.oidcGroups"></a>

- *Type:* typing.List[str]

A list of OIDC group names whose members will be part of this workteam.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/sagemaker_workteam#oidc_groups SagemakerWorkteam#oidc_groups}

---

##### `reset_cognito_member_definition` <a name="reset_cognito_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition"></a>

```python
def reset_cognito_member_definition() -> None
```

##### `reset_oidc_member_definition` <a name="reset_oidc_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition"></a>

```python
def reset_oidc_member_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition">cognito_member_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition">oidc_member_definition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput">cognito_member_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput">oidc_member_definition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_member_definition`<sup>Required</sup> <a name="cognito_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition"></a>

```python
cognito_member_definition: SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a>

---

##### `oidc_member_definition`<sup>Required</sup> <a name="oidc_member_definition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition"></a>

```python
oidc_member_definition: SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a>

---

##### `cognito_member_definition_input`<sup>Optional</sup> <a name="cognito_member_definition_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput"></a>

```python
cognito_member_definition_input: IResolvable | SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---

##### `oidc_member_definition_input`<sup>Optional</sup> <a name="oidc_member_definition_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput"></a>

```python
oidc_member_definition_input: IResolvable | SagemakerWorkteamMemberDefinitionsOidcMemberDefinition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerWorkteamMemberDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions">SagemakerWorkteamMemberDefinitions</a>

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">reset_notification_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notification_topic_arn` <a name="reset_notification_topic_arn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```python
def reset_notification_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">notification_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_topic_arn_input`<sup>Optional</sup> <a name="notification_topic_arn_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```python
notification_topic_arn_input: str
```

- *Type:* str

---

##### `notification_topic_arn`<sup>Required</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerWorkteamNotificationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---


### SagemakerWorkteamTagsList <a name="SagemakerWorkteamTagsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerWorkteamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerWorkteamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>]

---


### SagemakerWorkteamTagsOutputReference <a name="SagemakerWorkteamTagsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_workteam

sagemakerWorkteam.SagemakerWorkteamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerWorkteamTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags">SagemakerWorkteamTags</a>

---



