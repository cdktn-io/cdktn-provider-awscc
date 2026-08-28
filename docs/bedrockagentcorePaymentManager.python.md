# `bedrockagentcorePaymentManager` Submodule <a name="`bedrockagentcorePaymentManager` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentManager <a name="BedrockagentcorePaymentManager" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager awscc_bedrockagentcore_payment_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManager(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorizer_type: str,
  name: str,
  role_arn: str,
  authorizer_configuration: BedrockagentcorePaymentManagerAuthorizerConfiguration = None,
  description: str = None,
  tags: IResolvable | typing.List[BedrockagentcorePaymentManagerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role for the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]</code> | Tags to assign to the payment manager. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.name"></a>

- *Type:* str

The name of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#name BedrockagentcorePaymentManager#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role for the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#role_arn BedrockagentcorePaymentManager#role_arn}

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.authorizerConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.description"></a>

- *Type:* str

A description of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#description BedrockagentcorePaymentManager#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]

Tags to assign to the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#tags BedrockagentcorePaymentManager#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration">put_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetAuthorizerConfiguration">reset_authorizer_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authorizer_configuration` <a name="put_authorizer_configuration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration"></a>

```python
def put_authorizer_configuration(
  custom_jwt_authorizer: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer = None
) -> None
```

###### `custom_jwt_authorizer`<sup>Optional</sup> <a name="custom_jwt_authorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putAuthorizerConfiguration.parameter.customJwtAuthorizer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer BedrockagentcorePaymentManager#custom_jwt_authorizer}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockagentcorePaymentManagerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]

---

##### `reset_authorizer_configuration` <a name="reset_authorizer_configuration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetAuthorizerConfiguration"></a>

```python
def reset_authorizer_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcorePaymentManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcorePaymentManager to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcorePaymentManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerArn">payment_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerId">payment_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList">BedrockagentcorePaymentManagerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.workloadIdentityDetails">workload_identity_details</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfigurationInput">authorizer_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerTypeInput">authorizer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerType">authorizer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorizer_configuration`<sup>Required</sup> <a name="authorizer_configuration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfiguration"></a>

```python
authorizer_configuration: BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `payment_manager_arn`<sup>Required</sup> <a name="payment_manager_arn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerArn"></a>

```python
payment_manager_arn: str
```

- *Type:* str

---

##### `payment_manager_id`<sup>Required</sup> <a name="payment_manager_id" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.paymentManagerId"></a>

```python
payment_manager_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tags"></a>

```python
tags: BedrockagentcorePaymentManagerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList">BedrockagentcorePaymentManagerTagsList</a>

---

##### `workload_identity_details`<sup>Required</sup> <a name="workload_identity_details" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.workloadIdentityDetails"></a>

```python
workload_identity_details: BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference">BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference</a>

---

##### `authorizer_configuration_input`<sup>Optional</sup> <a name="authorizer_configuration_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerConfigurationInput"></a>

```python
authorizer_configuration_input: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---

##### `authorizer_type_input`<sup>Optional</sup> <a name="authorizer_type_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerTypeInput"></a>

```python
authorizer_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockagentcorePaymentManagerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManager.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentManagerAuthorizerConfiguration <a name="BedrockagentcorePaymentManagerAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration(
  custom_jwt_authorizer: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer BedrockagentcorePaymentManager#custom_jwt_authorizer}. |

---

##### `custom_jwt_authorizer`<sup>Optional</sup> <a name="custom_jwt_authorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_jwt_authorizer BedrockagentcorePaymentManager#custom_jwt_authorizer}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer(
  allowed_audience: typing.List[str] = None,
  allowed_clients: typing.List[str] = None,
  allowed_scopes: typing.List[str] = None,
  custom_claims: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims] = None,
  discovery_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience BedrockagentcorePaymentManager#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients BedrockagentcorePaymentManager#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes BedrockagentcorePaymentManager#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">custom_claims</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_claims BedrockagentcorePaymentManager#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#discovery_url BedrockagentcorePaymentManager#discovery_url}. |

---

##### `allowed_audience`<sup>Optional</sup> <a name="allowed_audience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience BedrockagentcorePaymentManager#allowed_audience}.

---

##### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients BedrockagentcorePaymentManager#allowed_clients}.

---

##### `allowed_scopes`<sup>Optional</sup> <a name="allowed_scopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```python
allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes BedrockagentcorePaymentManager#allowed_scopes}.

---

##### `custom_claims`<sup>Optional</sup> <a name="custom_claims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```python
custom_claims: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_claims BedrockagentcorePaymentManager#custom_claims}.

---

##### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#discovery_url BedrockagentcorePaymentManager#discovery_url}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims(
  authorizing_claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue = None,
  inbound_token_claim_name: str = None,
  inbound_token_claim_value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">authorizing_claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizing_claim_match_value BedrockagentcorePaymentManager#authorizing_claim_match_value}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">inbound_token_claim_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_name BedrockagentcorePaymentManager#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">inbound_token_claim_value_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_value_type BedrockagentcorePaymentManager#inbound_token_claim_value_type}. |

---

##### `authorizing_claim_match_value`<sup>Optional</sup> <a name="authorizing_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```python
authorizing_claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizing_claim_match_value BedrockagentcorePaymentManager#authorizing_claim_match_value}.

---

##### `inbound_token_claim_name`<sup>Optional</sup> <a name="inbound_token_claim_name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```python
inbound_token_claim_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_name BedrockagentcorePaymentManager#inbound_token_claim_name}.

---

##### `inbound_token_claim_value_type`<sup>Optional</sup> <a name="inbound_token_claim_value_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```python
inbound_token_claim_value_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#inbound_token_claim_value_type BedrockagentcorePaymentManager#inbound_token_claim_value_type}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue(
  claim_match_operator: str = None,
  claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">claim_match_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator BedrockagentcorePaymentManager#claim_match_operator}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value BedrockagentcorePaymentManager#claim_match_value}. |

---

##### `claim_match_operator`<sup>Optional</sup> <a name="claim_match_operator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```python
claim_match_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator BedrockagentcorePaymentManager#claim_match_operator}.

---

##### `claim_match_value`<sup>Optional</sup> <a name="claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```python
claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value BedrockagentcorePaymentManager#claim_match_value}.

---

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue(
  match_value_string: str = None,
  match_value_string_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">match_value_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string BedrockagentcorePaymentManager#match_value_string}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">match_value_string_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list BedrockagentcorePaymentManager#match_value_string_list}. |

---

##### `match_value_string`<sup>Optional</sup> <a name="match_value_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```python
match_value_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string BedrockagentcorePaymentManager#match_value_string}.

---

##### `match_value_string_list`<sup>Optional</sup> <a name="match_value_string_list" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```python
match_value_string_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list BedrockagentcorePaymentManager#match_value_string_list}.

---

### BedrockagentcorePaymentManagerConfig <a name="BedrockagentcorePaymentManagerConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorizer_type: str,
  name: str,
  role_arn: str,
  authorizer_configuration: BedrockagentcorePaymentManagerAuthorizerConfiguration = None,
  description: str = None,
  tags: IResolvable | typing.List[BedrockagentcorePaymentManagerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerType">authorizer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.name">name</a></code> | <code>str</code> | The name of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role for the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerConfiguration">authorizer_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.description">description</a></code> | <code>str</code> | A description of the payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]</code> | Tags to assign to the payment manager. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorizer_type`<sup>Required</sup> <a name="authorizer_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerType"></a>

```python
authorizer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_type BedrockagentcorePaymentManager#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#name BedrockagentcorePaymentManager#name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role for the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#role_arn BedrockagentcorePaymentManager#role_arn}

---

##### `authorizer_configuration`<sup>Optional</sup> <a name="authorizer_configuration" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.authorizerConfiguration"></a>

```python
authorizer_configuration: BedrockagentcorePaymentManagerAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#authorizer_configuration BedrockagentcorePaymentManager#authorizer_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#description BedrockagentcorePaymentManager#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockagentcorePaymentManagerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]

Tags to assign to the payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#tags BedrockagentcorePaymentManager#tags}

---

### BedrockagentcorePaymentManagerTags <a name="BedrockagentcorePaymentManagerTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#key BedrockagentcorePaymentManager#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#value BedrockagentcorePaymentManager#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#key BedrockagentcorePaymentManager#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#value BedrockagentcorePaymentManager#value}.

---

### BedrockagentcorePaymentManagerWorkloadIdentityDetails <a name="BedrockagentcorePaymentManagerWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">reset_match_value_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">reset_match_value_string_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_match_value_string` <a name="reset_match_value_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```python
def reset_match_value_string() -> None
```

##### `reset_match_value_string_list` <a name="reset_match_value_string_list" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```python
def reset_match_value_string_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">match_value_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">match_value_string_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">match_value_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">match_value_string_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_value_string_input`<sup>Optional</sup> <a name="match_value_string_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```python
match_value_string_input: str
```

- *Type:* str

---

##### `match_value_string_list_input`<sup>Optional</sup> <a name="match_value_string_list_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```python
match_value_string_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_value_string`<sup>Required</sup> <a name="match_value_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```python
match_value_string: str
```

- *Type:* str

---

##### `match_value_string_list`<sup>Required</sup> <a name="match_value_string_list" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```python
match_value_string_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">put_claim_match_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">reset_claim_match_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">reset_claim_match_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_claim_match_value` <a name="put_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```python
def put_claim_match_value(
  match_value_string: str = None,
  match_value_string_list: typing.List[str] = None
) -> None
```

###### `match_value_string`<sup>Optional</sup> <a name="match_value_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.matchValueString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string BedrockagentcorePaymentManager#match_value_string}.

---

###### `match_value_string_list`<sup>Optional</sup> <a name="match_value_string_list" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.matchValueStringList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#match_value_string_list BedrockagentcorePaymentManager#match_value_string_list}.

---

##### `reset_claim_match_operator` <a name="reset_claim_match_operator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```python
def reset_claim_match_operator() -> None
```

##### `reset_claim_match_value` <a name="reset_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```python
def reset_claim_match_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claim_match_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claim_match_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claim_match_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `claim_match_value`<sup>Required</sup> <a name="claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```python
claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `claim_match_operator_input`<sup>Optional</sup> <a name="claim_match_operator_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```python
claim_match_operator_input: str
```

- *Type:* str

---

##### `claim_match_value_input`<sup>Optional</sup> <a name="claim_match_value_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```python
claim_match_value_input: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `claim_match_operator`<sup>Required</sup> <a name="claim_match_operator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```python
claim_match_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">put_authorizing_claim_match_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">reset_authorizing_claim_match_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">reset_inbound_token_claim_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">reset_inbound_token_claim_value_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorizing_claim_match_value` <a name="put_authorizing_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```python
def put_authorizing_claim_match_value(
  claim_match_operator: str = None,
  claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue = None
) -> None
```

###### `claim_match_operator`<sup>Optional</sup> <a name="claim_match_operator" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.claimMatchOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_operator BedrockagentcorePaymentManager#claim_match_operator}.

---

###### `claim_match_value`<sup>Optional</sup> <a name="claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.claimMatchValue"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#claim_match_value BedrockagentcorePaymentManager#claim_match_value}.

---

##### `reset_authorizing_claim_match_value` <a name="reset_authorizing_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```python
def reset_authorizing_claim_match_value() -> None
```

##### `reset_inbound_token_claim_name` <a name="reset_inbound_token_claim_name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```python
def reset_inbound_token_claim_name() -> None
```

##### `reset_inbound_token_claim_value_type` <a name="reset_inbound_token_claim_value_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```python
def reset_inbound_token_claim_value_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizing_claim_match_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">authorizing_claim_match_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">inbound_token_claim_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">inbound_token_claim_value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inbound_token_claim_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inbound_token_claim_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizing_claim_match_value`<sup>Required</sup> <a name="authorizing_claim_match_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```python
authorizing_claim_match_value: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `authorizing_claim_match_value_input`<sup>Optional</sup> <a name="authorizing_claim_match_value_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```python
authorizing_claim_match_value_input: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `inbound_token_claim_name_input`<sup>Optional</sup> <a name="inbound_token_claim_name_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```python
inbound_token_claim_name_input: str
```

- *Type:* str

---

##### `inbound_token_claim_value_type_input`<sup>Optional</sup> <a name="inbound_token_claim_value_type_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```python
inbound_token_claim_value_type_input: str
```

- *Type:* str

---

##### `inbound_token_claim_name`<sup>Required</sup> <a name="inbound_token_claim_name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```python
inbound_token_claim_name: str
```

- *Type:* str

---

##### `inbound_token_claim_value_type`<sup>Required</sup> <a name="inbound_token_claim_value_type" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```python
inbound_token_claim_value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">put_custom_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">reset_allowed_audience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">reset_allowed_clients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">reset_allowed_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">reset_custom_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">reset_discovery_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_claims` <a name="put_custom_claims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```python
def put_custom_claims(
  value: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]

---

##### `reset_allowed_audience` <a name="reset_allowed_audience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```python
def reset_allowed_audience() -> None
```

##### `reset_allowed_clients` <a name="reset_allowed_clients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```python
def reset_allowed_clients() -> None
```

##### `reset_allowed_scopes` <a name="reset_allowed_scopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```python
def reset_allowed_scopes() -> None
```

##### `reset_custom_claims` <a name="reset_custom_claims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```python
def reset_custom_claims() -> None
```

##### `reset_discovery_url` <a name="reset_discovery_url" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```python
def reset_discovery_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">custom_claims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowed_audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowed_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowed_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">custom_claims_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowed_audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowed_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_claims`<sup>Required</sup> <a name="custom_claims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```python
custom_claims: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `allowed_audience_input`<sup>Optional</sup> <a name="allowed_audience_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```python
allowed_audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients_input`<sup>Optional</sup> <a name="allowed_clients_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```python
allowed_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_scopes_input`<sup>Optional</sup> <a name="allowed_scopes_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```python
allowed_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_claims_input`<sup>Optional</sup> <a name="custom_claims_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```python
custom_claims_input: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `allowed_audience`<sup>Required</sup> <a name="allowed_audience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```python
allowed_audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```python
allowed_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_scopes`<sup>Required</sup> <a name="allowed_scopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```python
allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference <a name="BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">put_custom_jwt_authorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">reset_custom_jwt_authorizer</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_jwt_authorizer` <a name="put_custom_jwt_authorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```python
def put_custom_jwt_authorizer(
  allowed_audience: typing.List[str] = None,
  allowed_clients: typing.List[str] = None,
  allowed_scopes: typing.List[str] = None,
  custom_claims: IResolvable | typing.List[BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims] = None,
  discovery_url: str = None
) -> None
```

###### `allowed_audience`<sup>Optional</sup> <a name="allowed_audience" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.allowedAudience"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_audience BedrockagentcorePaymentManager#allowed_audience}.

---

###### `allowed_clients`<sup>Optional</sup> <a name="allowed_clients" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.allowedClients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_clients BedrockagentcorePaymentManager#allowed_clients}.

---

###### `allowed_scopes`<sup>Optional</sup> <a name="allowed_scopes" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.allowedScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#allowed_scopes BedrockagentcorePaymentManager#allowed_scopes}.

---

###### `custom_claims`<sup>Optional</sup> <a name="custom_claims" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.customClaims"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#custom_claims BedrockagentcorePaymentManager#custom_claims}.

---

###### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.discoveryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_payment_manager#discovery_url BedrockagentcorePaymentManager#discovery_url}.

---

##### `reset_custom_jwt_authorizer` <a name="reset_custom_jwt_authorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```python
def reset_custom_jwt_authorizer() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">custom_jwt_authorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">custom_jwt_authorizer_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_jwt_authorizer`<sup>Required</sup> <a name="custom_jwt_authorizer" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```python
custom_jwt_authorizer: BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `custom_jwt_authorizer_input`<sup>Optional</sup> <a name="custom_jwt_authorizer_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```python
custom_jwt_authorizer_input: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcorePaymentManagerAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerAuthorizerConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerAuthorizerConfiguration">BedrockagentcorePaymentManagerAuthorizerConfiguration</a>

---


### BedrockagentcorePaymentManagerTagsList <a name="BedrockagentcorePaymentManagerTagsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcorePaymentManagerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcorePaymentManagerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>]

---


### BedrockagentcorePaymentManagerTagsOutputReference <a name="BedrockagentcorePaymentManagerTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcorePaymentManagerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerTags">BedrockagentcorePaymentManagerTags</a>

---


### BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference <a name="BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_payment_manager

bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workload_identity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails">BedrockagentcorePaymentManagerWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workload_identity_arn`<sup>Required</sup> <a name="workload_identity_arn" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```python
workload_identity_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcorePaymentManagerWorkloadIdentityDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentManager.BedrockagentcorePaymentManagerWorkloadIdentityDetails">BedrockagentcorePaymentManagerWorkloadIdentityDetails</a>

---



