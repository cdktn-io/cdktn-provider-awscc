# `connectTaskTemplate` Submodule <a name="`connectTaskTemplate` Submodule" id="@cdktn/provider-awscc.connectTaskTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTaskTemplate <a name="ConnectTaskTemplate" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template awscc_connect_task_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  client_token: str = None,
  constraints: ConnectTaskTemplateConstraints = None,
  contact_flow_arn: str = None,
  defaults: IResolvable | typing.List[ConnectTaskTemplateDefaults] = None,
  description: str = None,
  fields: IResolvable | typing.List[ConnectTaskTemplateFields] = None,
  name: str = None,
  self_assign_contact_flow_arn: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectTaskTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.contactFlowArn">contact_flow_arn</a></code> | <code>str</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.defaults">defaults</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]</code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.selfAssignContactFlowArn">self_assign_contact_flow_arn</a></code> | <code>str</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.clientToken"></a>

- *Type:* str

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.constraints"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `contact_flow_arn`<sup>Optional</sup> <a name="contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.contactFlowArn"></a>

- *Type:* str

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.defaults"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.description"></a>

- *Type:* str

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.fields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `self_assign_contact_flow_arn`<sup>Optional</sup> <a name="self_assign_contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.selfAssignContactFlowArn"></a>

- *Type:* str

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.status"></a>

- *Type:* str

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints">put_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults">put_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints">reset_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn">reset_contact_flow_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults">reset_defaults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn">reset_self_assign_contact_flow_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_constraints` <a name="put_constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints"></a>

```python
def put_constraints(
  invisible_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields] = None,
  read_only_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields] = None,
  required_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields] = None
) -> None
```

###### `invisible_fields`<sup>Optional</sup> <a name="invisible_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.invisibleFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]

The list of the task template's invisible fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}

---

###### `read_only_fields`<sup>Optional</sup> <a name="read_only_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.readOnlyFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]

The list of the task template's read only fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}

---

###### `required_fields`<sup>Optional</sup> <a name="required_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putConstraints.parameter.requiredFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]

The list of the task template's required fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}

---

##### `put_defaults` <a name="put_defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults"></a>

```python
def put_defaults(
  value: IResolvable | typing.List[ConnectTaskTemplateDefaults]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putDefaults.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]

---

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[ConnectTaskTemplateFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectTaskTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_constraints` <a name="reset_constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetConstraints"></a>

```python
def reset_constraints() -> None
```

##### `reset_contact_flow_arn` <a name="reset_contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetContactFlowArn"></a>

```python
def reset_contact_flow_arn() -> None
```

##### `reset_defaults` <a name="reset_defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDefaults"></a>

```python
def reset_defaults() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_self_assign_contact_flow_arn` <a name="reset_self_assign_contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetSelfAssignContactFlowArn"></a>

```python
def reset_self_assign_contact_flow_arn() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectTaskTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectTaskTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectTaskTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTaskTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults">defaults</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput">constraints_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput">contact_flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput">defaults_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput">self_assign_contact_flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn">contact_flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn">self_assign_contact_flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraints"></a>

```python
constraints: ConnectTaskTemplateConstraintsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference">ConnectTaskTemplateConstraintsOutputReference</a>

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaults"></a>

```python
defaults: ConnectTaskTemplateDefaultsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList">ConnectTaskTemplateDefaultsList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fields"></a>

```python
fields: ConnectTaskTemplateFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList">ConnectTaskTemplateFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tags"></a>

```python
tags: ConnectTaskTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList">ConnectTaskTemplateTagsList</a>

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `constraints_input`<sup>Optional</sup> <a name="constraints_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.constraintsInput"></a>

```python
constraints_input: IResolvable | ConnectTaskTemplateConstraints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---

##### `contact_flow_arn_input`<sup>Optional</sup> <a name="contact_flow_arn_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArnInput"></a>

```python
contact_flow_arn_input: str
```

- *Type:* str

---

##### `defaults_input`<sup>Optional</sup> <a name="defaults_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.defaultsInput"></a>

```python
defaults_input: IResolvable | typing.List[ConnectTaskTemplateDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[ConnectTaskTemplateFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `self_assign_contact_flow_arn_input`<sup>Optional</sup> <a name="self_assign_contact_flow_arn_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArnInput"></a>

```python
self_assign_contact_flow_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectTaskTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `contact_flow_arn`<sup>Required</sup> <a name="contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.contactFlowArn"></a>

```python
contact_flow_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_assign_contact_flow_arn`<sup>Required</sup> <a name="self_assign_contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.selfAssignContactFlowArn"></a>

```python
self_assign_contact_flow_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTaskTemplateConfig <a name="ConnectTaskTemplateConfig" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  client_token: str = None,
  constraints: ConnectTaskTemplateConstraints = None,
  contact_flow_arn: str = None,
  defaults: IResolvable | typing.List[ConnectTaskTemplateDefaults] = None,
  description: str = None,
  fields: IResolvable | typing.List[ConnectTaskTemplateFields] = None,
  name: str = None,
  self_assign_contact_flow_arn: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectTaskTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier (arn) of the instance. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken">client_token</a></code> | <code>str</code> | the client token string in uuid format. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints">constraints</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | The constraints for the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn">contact_flow_arn</a></code> | <code>str</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults">defaults</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description">description</a></code> | <code>str</code> | The description of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]</code> | The list of task template's fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn">self_assign_contact_flow_arn</a></code> | <code>str</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status">status</a></code> | <code>str</code> | The status of the task template. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier (arn) of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#instance_arn ConnectTaskTemplate#instance_arn}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

the client token string in uuid format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#client_token ConnectTaskTemplate#client_token}

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.constraints"></a>

```python
constraints: ConnectTaskTemplateConstraints
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

The constraints for the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#constraints ConnectTaskTemplate#constraints}

---

##### `contact_flow_arn`<sup>Optional</sup> <a name="contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.contactFlowArn"></a>

```python
contact_flow_arn: str
```

- *Type:* str

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#contact_flow_arn ConnectTaskTemplate#contact_flow_arn}

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.defaults"></a>

```python
defaults: IResolvable | typing.List[ConnectTaskTemplateDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#defaults ConnectTaskTemplate#defaults}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.fields"></a>

```python
fields: IResolvable | typing.List[ConnectTaskTemplateFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]

The list of task template's fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#fields ConnectTaskTemplate#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `self_assign_contact_flow_arn`<sup>Optional</sup> <a name="self_assign_contact_flow_arn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.selfAssignContactFlowArn"></a>

```python
self_assign_contact_flow_arn: str
```

- *Type:* str

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#self_assign_contact_flow_arn ConnectTaskTemplate#self_assign_contact_flow_arn}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the task template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#status ConnectTaskTemplate#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectTaskTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#tags ConnectTaskTemplate#tags}

---

### ConnectTaskTemplateConstraints <a name="ConnectTaskTemplateConstraints" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraints(
  invisible_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields] = None,
  read_only_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields] = None,
  required_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields">invisible_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]</code> | The list of the task template's invisible fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields">read_only_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]</code> | The list of the task template's read only fields. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields">required_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]</code> | The list of the task template's required fields. |

---

##### `invisible_fields`<sup>Optional</sup> <a name="invisible_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.invisibleFields"></a>

```python
invisible_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]

The list of the task template's invisible fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#invisible_fields ConnectTaskTemplate#invisible_fields}

---

##### `read_only_fields`<sup>Optional</sup> <a name="read_only_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.readOnlyFields"></a>

```python
read_only_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]

The list of the task template's read only fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#read_only_fields ConnectTaskTemplate#read_only_fields}

---

##### `required_fields`<sup>Optional</sup> <a name="required_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints.property.requiredFields"></a>

```python
required_fields: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]

The list of the task template's required fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#required_fields ConnectTaskTemplate#required_fields}

---

### ConnectTaskTemplateConstraintsInvisibleFields <a name="ConnectTaskTemplateConstraintsInvisibleFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields(
  id: ConnectTaskTemplateConstraintsInvisibleFieldsId = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsInvisibleFieldsId
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsInvisibleFieldsId <a name="ConnectTaskTemplateConstraintsInvisibleFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name">name</a></code> | <code>str</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsReadOnlyFields <a name="ConnectTaskTemplateConstraintsReadOnlyFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields(
  id: ConnectTaskTemplateConstraintsReadOnlyFieldsId = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsReadOnlyFieldsId
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsReadOnlyFieldsId <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name">name</a></code> | <code>str</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateConstraintsRequiredFields <a name="ConnectTaskTemplateConstraintsRequiredFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields(
  id: ConnectTaskTemplateConstraintsRequiredFieldsId = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | the identifier (name) for the task template field. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsRequiredFieldsId
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateConstraintsRequiredFieldsId <a name="ConnectTaskTemplateConstraintsRequiredFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name">name</a></code> | <code>str</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateDefaults <a name="ConnectTaskTemplateDefaults" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateDefaults(
  default_value: str = None,
  id: ConnectTaskTemplateDefaultsId = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue">default_value</a></code> | <code>str</code> | the default value for the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | the identifier (name) for the task template field. |

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

the default value for the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#default_value ConnectTaskTemplate#default_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults.property.id"></a>

```python
id: ConnectTaskTemplateDefaultsId
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConnectTaskTemplateDefaultsId <a name="ConnectTaskTemplateDefaultsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateDefaultsId(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name">name</a></code> | <code>str</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateFields <a name="ConnectTaskTemplateFields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateFields(
  description: str = None,
  id: ConnectTaskTemplateFieldsId = None,
  single_select_options: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description">description</a></code> | <code>str</code> | The description of the task template's field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | the identifier (name) for the task template field. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions">single_select_options</a></code> | <code>typing.List[str]</code> | list of field options to be used with single select. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type">type</a></code> | <code>str</code> | The type of the task template's field. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#description ConnectTaskTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.id"></a>

```python
id: ConnectTaskTemplateFieldsId
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

the identifier (name) for the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#id ConnectTaskTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `single_select_options`<sup>Optional</sup> <a name="single_select_options" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.singleSelectOptions"></a>

```python
single_select_options: typing.List[str]
```

- *Type:* typing.List[str]

list of field options to be used with single select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#single_select_options ConnectTaskTemplate#single_select_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the task template's field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#type ConnectTaskTemplate#type}

---

### ConnectTaskTemplateFieldsId <a name="ConnectTaskTemplateFieldsId" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateFieldsId(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name">name</a></code> | <code>str</code> | The name of the task template field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

### ConnectTaskTemplateTags <a name="ConnectTaskTemplateTags" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#key ConnectTaskTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#value ConnectTaskTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsInvisibleFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---


### ConnectTaskTemplateConstraintsInvisibleFieldsList <a name="ConnectTaskTemplateConstraintsInvisibleFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]

---


### ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference <a name="ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId">put_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_id` <a name="put_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId"></a>

```python
def put_id(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.putId.parameter.name"></a>

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput">id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference">ConnectTaskTemplateConstraintsInvisibleFieldsIdOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.idInput"></a>

```python
id_input: IResolvable | ConnectTaskTemplateConstraintsInvisibleFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsId">ConnectTaskTemplateConstraintsInvisibleFieldsId</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsInvisibleFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>

---


### ConnectTaskTemplateConstraintsOutputReference <a name="ConnectTaskTemplateConstraintsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields">put_invisible_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields">put_read_only_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields">put_required_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields">reset_invisible_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields">reset_read_only_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields">reset_required_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invisible_fields` <a name="put_invisible_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields"></a>

```python
def put_invisible_fields(
  value: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putInvisibleFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]

---

##### `put_read_only_fields` <a name="put_read_only_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields"></a>

```python
def put_read_only_fields(
  value: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putReadOnlyFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]

---

##### `put_required_fields` <a name="put_required_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields"></a>

```python
def put_required_fields(
  value: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.putRequiredFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]

---

##### `reset_invisible_fields` <a name="reset_invisible_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetInvisibleFields"></a>

```python
def reset_invisible_fields() -> None
```

##### `reset_read_only_fields` <a name="reset_read_only_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetReadOnlyFields"></a>

```python
def reset_read_only_fields() -> None
```

##### `reset_required_fields` <a name="reset_required_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.resetRequiredFields"></a>

```python
def reset_required_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields">invisible_fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields">read_only_fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields">required_fields</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput">invisible_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput">read_only_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput">required_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invisible_fields`<sup>Required</sup> <a name="invisible_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFields"></a>

```python
invisible_fields: ConnectTaskTemplateConstraintsInvisibleFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFieldsList">ConnectTaskTemplateConstraintsInvisibleFieldsList</a>

---

##### `read_only_fields`<sup>Required</sup> <a name="read_only_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFields"></a>

```python
read_only_fields: ConnectTaskTemplateConstraintsReadOnlyFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList">ConnectTaskTemplateConstraintsReadOnlyFieldsList</a>

---

##### `required_fields`<sup>Required</sup> <a name="required_fields" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFields"></a>

```python
required_fields: ConnectTaskTemplateConstraintsRequiredFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList">ConnectTaskTemplateConstraintsRequiredFieldsList</a>

---

##### `invisible_fields_input`<sup>Optional</sup> <a name="invisible_fields_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.invisibleFieldsInput"></a>

```python
invisible_fields_input: IResolvable | typing.List[ConnectTaskTemplateConstraintsInvisibleFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsInvisibleFields">ConnectTaskTemplateConstraintsInvisibleFields</a>]

---

##### `read_only_fields_input`<sup>Optional</sup> <a name="read_only_fields_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.readOnlyFieldsInput"></a>

```python
read_only_fields_input: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]

---

##### `required_fields_input`<sup>Optional</sup> <a name="required_fields_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.requiredFieldsInput"></a>

```python
required_fields_input: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraints">ConnectTaskTemplateConstraints</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsList <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateConstraintsReadOnlyFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>]

---


### ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference <a name="ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId">put_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_id` <a name="put_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId"></a>

```python
def put_id(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.putId.parameter.name"></a>

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput">id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference">ConnectTaskTemplateConstraintsReadOnlyFieldsIdOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.idInput"></a>

```python
id_input: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsId">ConnectTaskTemplateConstraintsReadOnlyFieldsId</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsReadOnlyFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsReadOnlyFields">ConnectTaskTemplateConstraintsReadOnlyFields</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsRequiredFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---


### ConnectTaskTemplateConstraintsRequiredFieldsList <a name="ConnectTaskTemplateConstraintsRequiredFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateConstraintsRequiredFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateConstraintsRequiredFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>]

---


### ConnectTaskTemplateConstraintsRequiredFieldsOutputReference <a name="ConnectTaskTemplateConstraintsRequiredFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId">put_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_id` <a name="put_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId"></a>

```python
def put_id(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.putId.parameter.name"></a>

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput">id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.id"></a>

```python
id: ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference">ConnectTaskTemplateConstraintsRequiredFieldsIdOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.idInput"></a>

```python
id_input: IResolvable | ConnectTaskTemplateConstraintsRequiredFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsId">ConnectTaskTemplateConstraintsRequiredFieldsId</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateConstraintsRequiredFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateConstraintsRequiredFields">ConnectTaskTemplateConstraintsRequiredFields</a>

---


### ConnectTaskTemplateDefaultsIdOutputReference <a name="ConnectTaskTemplateDefaultsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateDefaultsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---


### ConnectTaskTemplateDefaultsList <a name="ConnectTaskTemplateDefaultsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateDefaultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateDefaults]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>]

---


### ConnectTaskTemplateDefaultsOutputReference <a name="ConnectTaskTemplateDefaultsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId">put_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_id` <a name="put_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId"></a>

```python
def put_id(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.putId.parameter.name"></a>

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput">id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.id"></a>

```python
id: ConnectTaskTemplateDefaultsIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsIdOutputReference">ConnectTaskTemplateDefaultsIdOutputReference</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.idInput"></a>

```python
id_input: IResolvable | ConnectTaskTemplateDefaultsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsId">ConnectTaskTemplateDefaultsId</a>

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateDefaults
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateDefaults">ConnectTaskTemplateDefaults</a>

---


### ConnectTaskTemplateFieldsIdOutputReference <a name="ConnectTaskTemplateFieldsIdOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---


### ConnectTaskTemplateFieldsList <a name="ConnectTaskTemplateFieldsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>]

---


### ConnectTaskTemplateFieldsOutputReference <a name="ConnectTaskTemplateFieldsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId">put_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions">reset_single_select_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_id` <a name="put_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId"></a>

```python
def put_id(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.putId.parameter.name"></a>

- *Type:* str

The name of the task template field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_task_template#name ConnectTaskTemplate#name}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_single_select_options` <a name="reset_single_select_options" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetSingleSelectOptions"></a>

```python
def reset_single_select_options() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id">id</a></code> | <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput">id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput">single_select_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions">single_select_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.id"></a>

```python
id: ConnectTaskTemplateFieldsIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsIdOutputReference">ConnectTaskTemplateFieldsIdOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.idInput"></a>

```python
id_input: IResolvable | ConnectTaskTemplateFieldsId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsId">ConnectTaskTemplateFieldsId</a>

---

##### `single_select_options_input`<sup>Optional</sup> <a name="single_select_options_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptionsInput"></a>

```python
single_select_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `single_select_options`<sup>Required</sup> <a name="single_select_options" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.singleSelectOptions"></a>

```python
single_select_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateFields">ConnectTaskTemplateFields</a>

---


### ConnectTaskTemplateTagsList <a name="ConnectTaskTemplateTagsList" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTaskTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTaskTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>]

---


### ConnectTaskTemplateTagsOutputReference <a name="ConnectTaskTemplateTagsOutputReference" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_task_template

connectTaskTemplate.ConnectTaskTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTaskTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTaskTemplate.ConnectTaskTemplateTags">ConnectTaskTemplateTags</a>

---



