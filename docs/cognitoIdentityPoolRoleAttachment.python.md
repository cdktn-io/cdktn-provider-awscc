# `cognitoIdentityPoolRoleAttachment` Submodule <a name="`cognitoIdentityPoolRoleAttachment` Submodule" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPoolRoleAttachment <a name="CognitoIdentityPoolRoleAttachment" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_pool_id: str,
  role_mappings: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings] = None,
  roles: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roleMappings">role_mappings</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roles">roles</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}.

---

##### `role_mappings`<sup>Optional</sup> <a name="role_mappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roleMappings"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.Initializer.parameter.roles"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings">put_role_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings">reset_role_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles">reset_roles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_role_mappings` <a name="put_role_mappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings"></a>

```python
def put_role_mappings(
  value: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.putRoleMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]

---

##### `reset_role_mappings` <a name="reset_role_mappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoleMappings"></a>

```python
def reset_role_mappings() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.resetRoles"></a>

```python
def reset_roles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoIdentityPoolRoleAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoIdentityPoolRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoIdentityPoolRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId">identity_pool_role_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings">role_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput">role_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput">roles_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles">roles</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_pool_role_attachment_id`<sup>Required</sup> <a name="identity_pool_role_attachment_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId"></a>

```python
identity_pool_role_attachment_id: str
```

- *Type:* str

---

##### `role_mappings`<sup>Required</sup> <a name="role_mappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappings"></a>

```python
role_mappings: CognitoIdentityPoolRoleAttachmentRoleMappingsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap">CognitoIdentityPoolRoleAttachmentRoleMappingsMap</a>

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `role_mappings_input`<sup>Optional</sup> <a name="role_mappings_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roleMappingsInput"></a>

```python
role_mappings_input: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.rolesInput"></a>

```python
roles_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.roles"></a>

```python
roles: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolRoleAttachmentConfig <a name="CognitoIdentityPoolRoleAttachmentConfig" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_pool_id: str,
  role_mappings: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings] = None,
  roles: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings">role_mappings</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles">roles</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_pool_id CognitoIdentityPoolRoleAttachment#identity_pool_id}.

---

##### `role_mappings`<sup>Optional</sup> <a name="role_mappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roleMappings"></a>

```python
role_mappings: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_mappings CognitoIdentityPoolRoleAttachment#role_mappings}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentConfig.property.roles"></a>

```python
roles: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#roles CognitoIdentityPoolRoleAttachment#roles}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappings <a name="CognitoIdentityPoolRoleAttachmentRoleMappings" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings(
  ambiguous_role_resolution: str = None,
  identity_provider: str = None,
  rules_configuration: CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution">ambiguous_role_resolution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider">identity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration">rules_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}. |

---

##### `ambiguous_role_resolution`<sup>Optional</sup> <a name="ambiguous_role_resolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.ambiguousRoleResolution"></a>

```python
ambiguous_role_resolution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#ambiguous_role_resolution CognitoIdentityPoolRoleAttachment#ambiguous_role_resolution}.

---

##### `identity_provider`<sup>Optional</sup> <a name="identity_provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#identity_provider CognitoIdentityPoolRoleAttachment#identity_provider}.

---

##### `rules_configuration`<sup>Optional</sup> <a name="rules_configuration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.rulesConfiguration"></a>

```python
rules_configuration: CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules_configuration CognitoIdentityPoolRoleAttachment#rules_configuration}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#type CognitoIdentityPoolRoleAttachment#type}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration(
  rules: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}. |

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.property.rules"></a>

```python
rules: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}.

---

### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules(
  claim: str = None,
  match_type: str = None,
  role_arn: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim">claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType">match_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}. |

---

##### `claim`<sup>Optional</sup> <a name="claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.claim"></a>

```python
claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#claim CognitoIdentityPoolRoleAttachment#claim}.

---

##### `match_type`<sup>Optional</sup> <a name="match_type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#match_type CognitoIdentityPoolRoleAttachment#match_type}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#role_arn CognitoIdentityPoolRoleAttachment#role_arn}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#value CognitoIdentityPoolRoleAttachment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolRoleAttachmentRoleMappingsMap <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsMap" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get"></a>

```python
def get(
  key: str
) -> CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[CognitoIdentityPoolRoleAttachmentRoleMappings]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>]

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration">put_rules_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution">reset_ambiguous_role_resolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider">reset_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration">reset_rules_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules_configuration` <a name="put_rules_configuration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration"></a>

```python
def put_rules_configuration(
  rules: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules] = None
) -> None
```

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.putRulesConfiguration.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cognito_identity_pool_role_attachment#rules CognitoIdentityPoolRoleAttachment#rules}.

---

##### `reset_ambiguous_role_resolution` <a name="reset_ambiguous_role_resolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetAmbiguousRoleResolution"></a>

```python
def reset_ambiguous_role_resolution() -> None
```

##### `reset_identity_provider` <a name="reset_identity_provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetIdentityProvider"></a>

```python
def reset_identity_provider() -> None
```

##### `reset_rules_configuration` <a name="reset_rules_configuration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetRulesConfiguration"></a>

```python
def reset_rules_configuration() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration">rules_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput">ambiguous_role_resolution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput">identity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput">rules_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution">ambiguous_role_resolution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider">identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules_configuration`<sup>Required</sup> <a name="rules_configuration" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration"></a>

```python
rules_configuration: CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a>

---

##### `ambiguous_role_resolution_input`<sup>Optional</sup> <a name="ambiguous_role_resolution_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolutionInput"></a>

```python
ambiguous_role_resolution_input: str
```

- *Type:* str

---

##### `identity_provider_input`<sup>Optional</sup> <a name="identity_provider_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProviderInput"></a>

```python
identity_provider_input: str
```

- *Type:* str

---

##### `rules_configuration_input`<sup>Optional</sup> <a name="rules_configuration_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfigurationInput"></a>

```python
rules_configuration_input: IResolvable | CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ambiguous_role_resolution`<sup>Required</sup> <a name="ambiguous_role_resolution" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution"></a>

```python
ambiguous_role_resolution: str
```

- *Type:* str

---

##### `identity_provider`<sup>Required</sup> <a name="identity_provider" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider"></a>

```python
identity_provider: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolRoleAttachmentRoleMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappings">CognitoIdentityPoolRoleAttachmentRoleMappings</a>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]

---

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules"></a>

```python
rules: CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>]

---


### CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference <a name="CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_identity_pool_role_attachment

cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim">reset_claim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType">reset_match_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_claim` <a name="reset_claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetClaim"></a>

```python
def reset_claim() -> None
```

##### `reset_match_type` <a name="reset_match_type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetMatchType"></a>

```python
def reset_match_type() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput">claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim">claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_input`<sup>Optional</sup> <a name="claim_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claimInput"></a>

```python
claim_input: str
```

- *Type:* str

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `claim`<sup>Required</sup> <a name="claim" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim"></a>

```python
claim: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoIdentityPoolRoleAttachment.CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">CognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>

---



