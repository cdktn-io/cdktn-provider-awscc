# `cognitoUserPoolResourceServer` Submodule <a name="`cognitoUserPoolResourceServer` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolResourceServer <a name="CognitoUserPoolResourceServer" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server awscc_cognito_user_pool_resource_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifier: str,
  name: str,
  user_pool_id: str,
  scopes: IResolvable | typing.List[CognitoUserPoolResourceServerScopes] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#identifier CognitoUserPoolResourceServer#identifier}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#name CognitoUserPoolResourceServer#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#user_pool_id CognitoUserPoolResourceServer#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.scopes">scopes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scopes CognitoUserPoolResourceServer#scopes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#identifier CognitoUserPoolResourceServer#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#name CognitoUserPoolResourceServer#name}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#user_pool_id CognitoUserPoolResourceServer#user_pool_id}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.Initializer.parameter.scopes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scopes CognitoUserPoolResourceServer#scopes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.putScopes">put_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scopes` <a name="put_scopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.putScopes"></a>

```python
def put_scopes(
  value: IResolvable | typing.List[CognitoUserPoolResourceServerScopes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.putScopes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]

---

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.resetScopes"></a>

```python
def reset_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoUserPoolResourceServer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoUserPoolResourceServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoUserPoolResourceServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoUserPoolResourceServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolResourceServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.scopes">scopes</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList">CognitoUserPoolResourceServerScopesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.scopesInput">scopes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.scopes"></a>

```python
scopes: CognitoUserPoolResourceServerScopesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList">CognitoUserPoolResourceServerScopesList</a>

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.scopesInput"></a>

```python
scopes_input: IResolvable | typing.List[CognitoUserPoolResourceServerScopes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolResourceServerConfig <a name="CognitoUserPoolResourceServerConfig" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifier: str,
  name: str,
  user_pool_id: str,
  scopes: IResolvable | typing.List[CognitoUserPoolResourceServerScopes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#identifier CognitoUserPoolResourceServer#identifier}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#name CognitoUserPoolResourceServer#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#user_pool_id CognitoUserPoolResourceServer#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.scopes">scopes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scopes CognitoUserPoolResourceServer#scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#identifier CognitoUserPoolResourceServer#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#name CognitoUserPoolResourceServer#name}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#user_pool_id CognitoUserPoolResourceServer#user_pool_id}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerConfig.property.scopes"></a>

```python
scopes: IResolvable | typing.List[CognitoUserPoolResourceServerScopes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scopes CognitoUserPoolResourceServer#scopes}.

---

### CognitoUserPoolResourceServerScopes <a name="CognitoUserPoolResourceServerScopes" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes(
  scope_description: str = None,
  scope_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes.property.scopeDescription">scope_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scope_description CognitoUserPoolResourceServer#scope_description}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes.property.scopeName">scope_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scope_name CognitoUserPoolResourceServer#scope_name}. |

---

##### `scope_description`<sup>Optional</sup> <a name="scope_description" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes.property.scopeDescription"></a>

```python
scope_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scope_description CognitoUserPoolResourceServer#scope_description}.

---

##### `scope_name`<sup>Optional</sup> <a name="scope_name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_resource_server#scope_name CognitoUserPoolResourceServer#scope_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolResourceServerScopesList <a name="CognitoUserPoolResourceServerScopesList" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoUserPoolResourceServerScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoUserPoolResourceServerScopes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>]

---


### CognitoUserPoolResourceServerScopesOutputReference <a name="CognitoUserPoolResourceServerScopesOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_resource_server

cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resetScopeDescription">reset_scope_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resetScopeName">reset_scope_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope_description` <a name="reset_scope_description" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resetScopeDescription"></a>

```python
def reset_scope_description() -> None
```

##### `reset_scope_name` <a name="reset_scope_name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.resetScopeName"></a>

```python
def reset_scope_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeDescriptionInput">scope_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeDescription">scope_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_description_input`<sup>Optional</sup> <a name="scope_description_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeDescriptionInput"></a>

```python
scope_description_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `scope_description`<sup>Required</sup> <a name="scope_description" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeDescription"></a>

```python
scope_description: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolResourceServerScopes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolResourceServer.CognitoUserPoolResourceServerScopes">CognitoUserPoolResourceServerScopes</a>

---



