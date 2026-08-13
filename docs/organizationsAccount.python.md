# `organizationsAccount` Submodule <a name="`organizationsAccount` Submodule" id="@cdktn/provider-awscc.organizationsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsAccount <a name="OrganizationsAccount" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account awscc_organizations_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_name: str,
  email: str,
  parent_ids: typing.List[str] = None,
  role_name: str = None,
  tags: IResolvable | typing.List[OrganizationsAccountTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | The friendly name of the member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.email">email</a></code> | <code>str</code> | The email address of the owner to assign to the new member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.parentIds">parent_ids</a></code> | <code>typing.List[str]</code> | List of parent nodes for the member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]</code> | A list of tags that you want to attach to the newly created account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.accountName"></a>

- *Type:* str

The friendly name of the member account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#account_name OrganizationsAccount#account_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.email"></a>

- *Type:* str

The email address of the owner to assign to the new member account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#email OrganizationsAccount#email}

---

##### `parent_ids`<sup>Optional</sup> <a name="parent_ids" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.parentIds"></a>

- *Type:* typing.List[str]

List of parent nodes for the member account.

Currently only one parent at a time is supported. Default is root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#parent_ids OrganizationsAccount#parent_ids}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.roleName"></a>

- *Type:* str

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

Default name is OrganizationAccountAccessRole if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]

A list of tags that you want to attach to the newly created account.

For each tag in the list, you must specify both a tag key and a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetParentIds">reset_parent_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OrganizationsAccountTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]

---

##### `reset_parent_ids` <a name="reset_parent_ids" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetParentIds"></a>

```python
def reset_parent_ids() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OrganizationsAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isConstruct"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformElement"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformResource"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OrganizationsAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationsAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.joinedMethod">joined_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.joinedTimestamp">joined_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList">OrganizationsAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.parentIdsInput">parent_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.parentIds">parent_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `joined_method`<sup>Required</sup> <a name="joined_method" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.joinedMethod"></a>

```python
joined_method: str
```

- *Type:* str

---

##### `joined_timestamp`<sup>Required</sup> <a name="joined_timestamp" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.joinedTimestamp"></a>

```python
joined_timestamp: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tags"></a>

```python
tags: OrganizationsAccountTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList">OrganizationsAccountTagsList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `parent_ids_input`<sup>Optional</sup> <a name="parent_ids_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.parentIdsInput"></a>

```python
parent_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OrganizationsAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `parent_ids`<sup>Required</sup> <a name="parent_ids" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.parentIds"></a>

```python
parent_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsAccountConfig <a name="OrganizationsAccountConfig" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_name: str,
  email: str,
  parent_ids: typing.List[str] = None,
  role_name: str = None,
  tags: IResolvable | typing.List[OrganizationsAccountTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.accountName">account_name</a></code> | <code>str</code> | The friendly name of the member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.email">email</a></code> | <code>str</code> | The email address of the owner to assign to the new member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.parentIds">parent_ids</a></code> | <code>typing.List[str]</code> | List of parent nodes for the member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.roleName">role_name</a></code> | <code>str</code> | The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]</code> | A list of tags that you want to attach to the newly created account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

The friendly name of the member account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#account_name OrganizationsAccount#account_name}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The email address of the owner to assign to the new member account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#email OrganizationsAccount#email}

---

##### `parent_ids`<sup>Optional</sup> <a name="parent_ids" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.parentIds"></a>

```python
parent_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of parent nodes for the member account.

Currently only one parent at a time is supported. Default is root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#parent_ids OrganizationsAccount#parent_ids}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

The name of an IAM role that AWS Organizations automatically preconfigures in the new member account.

Default name is OrganizationAccountAccessRole if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OrganizationsAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]

A list of tags that you want to attach to the newly created account.

For each tag in the list, you must specify both a tag key and a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}

---

### OrganizationsAccountTags <a name="OrganizationsAccountTags" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccountTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags.property.value">value</a></code> | <code>str</code> | The string value that's associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#key OrganizationsAccount#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that's associated with the key of the tag.

You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_account#value OrganizationsAccount#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsAccountTagsList <a name="OrganizationsAccountTagsList" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccountTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationsAccountTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>]

---


### OrganizationsAccountTagsOutputReference <a name="OrganizationsAccountTagsOutputReference" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_account

organizationsAccount.OrganizationsAccountTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationsAccountTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsAccount.OrganizationsAccountTags">OrganizationsAccountTags</a>

---



