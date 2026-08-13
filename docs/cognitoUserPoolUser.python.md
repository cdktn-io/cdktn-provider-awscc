# `cognitoUserPoolUser` Submodule <a name="`cognitoUserPoolUser` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolUser <a name="CognitoUserPoolUser" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user awscc_cognito_user_pool_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_pool_id: str,
  client_metadata: typing.Mapping[str] = None,
  desired_delivery_mediums: typing.List[str] = None,
  force_alias_creation: bool | IResolvable = None,
  message_action: str = None,
  user_attributes: IResolvable | typing.List[CognitoUserPoolUserUserAttributes] = None,
  username: str = None,
  validation_data: IResolvable | typing.List[CognitoUserPoolUserValidationData] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forceAliasCreation">force_alias_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.messageAction">message_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userAttributes">user_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.validationData">validation_data</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}.

---

##### `client_metadata`<sup>Optional</sup> <a name="client_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.clientMetadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}.

---

##### `desired_delivery_mediums`<sup>Optional</sup> <a name="desired_delivery_mediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.desiredDeliveryMediums"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}.

---

##### `force_alias_creation`<sup>Optional</sup> <a name="force_alias_creation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.forceAliasCreation"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}.

---

##### `message_action`<sup>Optional</sup> <a name="message_action" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.messageAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}.

---

##### `user_attributes`<sup>Optional</sup> <a name="user_attributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.userAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}.

---

##### `validation_data`<sup>Optional</sup> <a name="validation_data" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.Initializer.parameter.validationData"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes">put_user_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData">put_validation_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata">reset_client_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums">reset_desired_delivery_mediums</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation">reset_force_alias_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction">reset_message_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes">reset_user_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData">reset_validation_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_attributes` <a name="put_user_attributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes"></a>

```python
def put_user_attributes(
  value: IResolvable | typing.List[CognitoUserPoolUserUserAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putUserAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]

---

##### `put_validation_data` <a name="put_validation_data" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData"></a>

```python
def put_validation_data(
  value: IResolvable | typing.List[CognitoUserPoolUserValidationData]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.putValidationData.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]

---

##### `reset_client_metadata` <a name="reset_client_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetClientMetadata"></a>

```python
def reset_client_metadata() -> None
```

##### `reset_desired_delivery_mediums` <a name="reset_desired_delivery_mediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetDesiredDeliveryMediums"></a>

```python
def reset_desired_delivery_mediums() -> None
```

##### `reset_force_alias_creation` <a name="reset_force_alias_creation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetForceAliasCreation"></a>

```python
def reset_force_alias_creation() -> None
```

##### `reset_message_action` <a name="reset_message_action" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetMessageAction"></a>

```python
def reset_message_action() -> None
```

##### `reset_user_attributes` <a name="reset_user_attributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUserAttributes"></a>

```python
def reset_user_attributes() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_validation_data` <a name="reset_validation_data" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.resetValidationData"></a>

```python
def reset_validation_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoUserPoolUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoUserPoolUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoUserPoolUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes">user_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData">validation_data</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput">client_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput">desired_delivery_mediums_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput">force_alias_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput">message_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput">user_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput">validation_data_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation">force_alias_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction">message_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_attributes`<sup>Required</sup> <a name="user_attributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributes"></a>

```python
user_attributes: CognitoUserPoolUserUserAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList">CognitoUserPoolUserUserAttributesList</a>

---

##### `validation_data`<sup>Required</sup> <a name="validation_data" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationData"></a>

```python
validation_data: CognitoUserPoolUserValidationDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList">CognitoUserPoolUserValidationDataList</a>

---

##### `client_metadata_input`<sup>Optional</sup> <a name="client_metadata_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadataInput"></a>

```python
client_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_delivery_mediums_input`<sup>Optional</sup> <a name="desired_delivery_mediums_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediumsInput"></a>

```python
desired_delivery_mediums_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_alias_creation_input`<sup>Optional</sup> <a name="force_alias_creation_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreationInput"></a>

```python
force_alias_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message_action_input`<sup>Optional</sup> <a name="message_action_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageActionInput"></a>

```python
message_action_input: str
```

- *Type:* str

---

##### `user_attributes_input`<sup>Optional</sup> <a name="user_attributes_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userAttributesInput"></a>

```python
user_attributes_input: IResolvable | typing.List[CognitoUserPoolUserUserAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `validation_data_input`<sup>Optional</sup> <a name="validation_data_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.validationDataInput"></a>

```python
validation_data_input: IResolvable | typing.List[CognitoUserPoolUserValidationData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]

---

##### `client_metadata`<sup>Required</sup> <a name="client_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.clientMetadata"></a>

```python
client_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_delivery_mediums`<sup>Required</sup> <a name="desired_delivery_mediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.desiredDeliveryMediums"></a>

```python
desired_delivery_mediums: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_alias_creation`<sup>Required</sup> <a name="force_alias_creation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.forceAliasCreation"></a>

```python
force_alias_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message_action`<sup>Required</sup> <a name="message_action" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.messageAction"></a>

```python
message_action: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolUserConfig <a name="CognitoUserPoolUserConfig" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_pool_id: str,
  client_metadata: typing.Mapping[str] = None,
  desired_delivery_mediums: typing.List[str] = None,
  force_alias_creation: bool | IResolvable = None,
  message_action: str = None,
  user_attributes: IResolvable | typing.List[CognitoUserPoolUserUserAttributes] = None,
  username: str = None,
  validation_data: IResolvable | typing.List[CognitoUserPoolUserValidationData] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata">client_metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums">desired_delivery_mediums</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation">force_alias_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction">message_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes">user_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData">validation_data</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_pool_id CognitoUserPoolUser#user_pool_id}.

---

##### `client_metadata`<sup>Optional</sup> <a name="client_metadata" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.clientMetadata"></a>

```python
client_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#client_metadata CognitoUserPoolUser#client_metadata}.

---

##### `desired_delivery_mediums`<sup>Optional</sup> <a name="desired_delivery_mediums" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.desiredDeliveryMediums"></a>

```python
desired_delivery_mediums: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#desired_delivery_mediums CognitoUserPoolUser#desired_delivery_mediums}.

---

##### `force_alias_creation`<sup>Optional</sup> <a name="force_alias_creation" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.forceAliasCreation"></a>

```python
force_alias_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#force_alias_creation CognitoUserPoolUser#force_alias_creation}.

---

##### `message_action`<sup>Optional</sup> <a name="message_action" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.messageAction"></a>

```python
message_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#message_action CognitoUserPoolUser#message_action}.

---

##### `user_attributes`<sup>Optional</sup> <a name="user_attributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.userAttributes"></a>

```python
user_attributes: IResolvable | typing.List[CognitoUserPoolUserUserAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#user_attributes CognitoUserPoolUser#user_attributes}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#username CognitoUserPoolUser#username}.

---

##### `validation_data`<sup>Optional</sup> <a name="validation_data" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserConfig.property.validationData"></a>

```python
validation_data: IResolvable | typing.List[CognitoUserPoolUserValidationData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#validation_data CognitoUserPoolUser#validation_data}.

---

### CognitoUserPoolUserUserAttributes <a name="CognitoUserPoolUserUserAttributes" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserUserAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

### CognitoUserPoolUserValidationData <a name="CognitoUserPoolUserValidationData" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserValidationData(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#name CognitoUserPoolUser#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_user_pool_user#value CognitoUserPoolUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolUserUserAttributesList <a name="CognitoUserPoolUserUserAttributesList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoUserPoolUserUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoUserPoolUserUserAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>]

---


### CognitoUserPoolUserUserAttributesOutputReference <a name="CognitoUserPoolUserUserAttributesOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolUserUserAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserUserAttributes">CognitoUserPoolUserUserAttributes</a>

---


### CognitoUserPoolUserValidationDataList <a name="CognitoUserPoolUserValidationDataList" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserValidationDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoUserPoolUserValidationDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CognitoUserPoolUserValidationData]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>]

---


### CognitoUserPoolUserValidationDataOutputReference <a name="CognitoUserPoolUserValidationDataOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_user

cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolUserValidationData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolUser.CognitoUserPoolUserValidationData">CognitoUserPoolUserValidationData</a>

---



