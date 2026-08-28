# `quicksightActionConnector` Submodule <a name="`quicksightActionConnector` Submodule" id="@cdktn/provider-awscc.quicksightActionConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightActionConnector <a name="QuicksightActionConnector" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector awscc_quicksight_action_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_connector_id: str,
  authentication_config: QuicksightActionConnectorAuthenticationConfig,
  aws_account_id: str,
  name: str,
  type: str,
  description: str = None,
  permissions: IResolvable | typing.List[QuicksightActionConnectorPermissions] = None,
  tags: IResolvable | typing.List[QuicksightActionConnectorTags] = None,
  vpc_connection_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.actionConnectorId">action_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_connector_id`<sup>Required</sup> <a name="action_connector_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.actionConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}.

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.authenticationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}.

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.permissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}.

---

##### `vpc_connection_arn`<sup>Optional</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.Initializer.parameter.vpcConnectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig">put_authentication_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn">reset_vpc_connection_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication_config` <a name="put_authentication_config" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig"></a>

```python
def put_authentication_config(
  authentication_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata,
  authentication_type: str
) -> None
```

###### `authentication_metadata`<sup>Required</sup> <a name="authentication_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig.parameter.authenticationMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}.

---

###### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putAuthenticationConfig.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}.

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[QuicksightActionConnectorPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightActionConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_connection_arn` <a name="reset_vpc_connection_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.resetVpcConnectionArn"></a>

```python
def reset_vpc_connection_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightActionConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightActionConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightActionConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightActionConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput">action_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput">authentication_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput">permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput">vpc_connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId">action_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfig"></a>

```python
authentication_config: QuicksightActionConnectorAuthenticationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference">QuicksightActionConnectorAuthenticationConfigOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `enabled_actions`<sup>Required</sup> <a name="enabled_actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissions"></a>

```python
permissions: QuicksightActionConnectorPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList">QuicksightActionConnectorPermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tags"></a>

```python
tags: QuicksightActionConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList">QuicksightActionConnectorTagsList</a>

---

##### `action_connector_id_input`<sup>Optional</sup> <a name="action_connector_id_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorIdInput"></a>

```python
action_connector_id_input: str
```

- *Type:* str

---

##### `authentication_config_input`<sup>Optional</sup> <a name="authentication_config_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.authenticationConfigInput"></a>

```python
authentication_config_input: IResolvable | QuicksightActionConnectorAuthenticationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[QuicksightActionConnectorPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightActionConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_connection_arn_input`<sup>Optional</sup> <a name="vpc_connection_arn_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArnInput"></a>

```python
vpc_connection_arn_input: str
```

- *Type:* str

---

##### `action_connector_id`<sup>Required</sup> <a name="action_connector_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.actionConnectorId"></a>

```python
action_connector_id: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_connection_arn`<sup>Required</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightActionConnectorAuthenticationConfig <a name="QuicksightActionConnectorAuthenticationConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig(
  authentication_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata,
  authentication_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata">authentication_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}. |

---

##### `authentication_metadata`<sup>Required</sup> <a name="authentication_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationMetadata"></a>

```python
authentication_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_metadata QuicksightActionConnector#authentication_metadata}.

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_type QuicksightActionConnector#authentication_type}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata(
  api_key_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata = None,
  authorization_code_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata = None,
  basic_auth_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata = None,
  client_credentials_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata = None,
  iam_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata = None,
  none_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata">api_key_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata">authorization_code_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata">basic_auth_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata">client_credentials_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata">iam_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata">none_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}. |

---

##### `api_key_connection_metadata`<sup>Optional</sup> <a name="api_key_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.apiKeyConnectionMetadata"></a>

```python
api_key_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}.

---

##### `authorization_code_grant_metadata`<sup>Optional</sup> <a name="authorization_code_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.authorizationCodeGrantMetadata"></a>

```python
authorization_code_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}.

---

##### `basic_auth_connection_metadata`<sup>Optional</sup> <a name="basic_auth_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.basicAuthConnectionMetadata"></a>

```python
basic_auth_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}.

---

##### `client_credentials_grant_metadata`<sup>Optional</sup> <a name="client_credentials_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.clientCredentialsGrantMetadata"></a>

```python
client_credentials_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}.

---

##### `iam_connection_metadata`<sup>Optional</sup> <a name="iam_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.iamConnectionMetadata"></a>

```python
iam_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}.

---

##### `none_connection_metadata`<sup>Optional</sup> <a name="none_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata.property.noneConnectionMetadata"></a>

```python
none_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata(
  api_key: str = None,
  base_endpoint: str = None,
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}.

---

##### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata(
  authorization_code_grant_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails = None,
  authorization_code_grant_credentials_source: str = None,
  base_endpoint: str = None,
  redirect_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails">authorization_code_grant_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource">authorization_code_grant_credentials_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}. |

---

##### `authorization_code_grant_credentials_details`<sup>Optional</sup> <a name="authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsDetails"></a>

```python
authorization_code_grant_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}.

---

##### `authorization_code_grant_credentials_source`<sup>Optional</sup> <a name="authorization_code_grant_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.authorizationCodeGrantCredentialsSource"></a>

```python
authorization_code_grant_credentials_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}.

---

##### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails(
  authorization_code_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails">authorization_code_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}. |

---

##### `authorization_code_grant_details`<sup>Optional</sup> <a name="authorization_code_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails.property.authorizationCodeGrantDetails"></a>

```python
authorization_code_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  token_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata(
  base_endpoint: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}. |

---

##### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata(
  base_endpoint: str = None,
  client_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails = None,
  client_credentials_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails">client_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource">client_credentials_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}. |

---

##### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `client_credentials_details`<sup>Optional</sup> <a name="client_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsDetails"></a>

```python
client_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}.

---

##### `client_credentials_source`<sup>Optional</sup> <a name="client_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata.property.clientCredentialsSource"></a>

```python
client_credentials_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails(
  client_credentials_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails">client_credentials_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}. |

---

##### `client_credentials_grant_details`<sup>Optional</sup> <a name="client_credentials_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails.property.clientCredentialsGrantDetails"></a>

```python
client_credentials_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails(
  client_id: str = None,
  client_secret: str = None,
  token_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata(
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}.

---

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata(
  base_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}. |

---

##### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

### QuicksightActionConnectorConfig <a name="QuicksightActionConnectorConfig" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_connector_id: str,
  authentication_config: QuicksightActionConnectorAuthenticationConfig,
  aws_account_id: str,
  name: str,
  type: str,
  description: str = None,
  permissions: IResolvable | typing.List[QuicksightActionConnectorPermissions] = None,
  tags: IResolvable | typing.List[QuicksightActionConnectorTags] = None,
  vpc_connection_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId">action_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig">authentication_config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn">vpc_connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_connector_id`<sup>Required</sup> <a name="action_connector_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.actionConnectorId"></a>

```python
action_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#action_connector_id QuicksightActionConnector#action_connector_id}.

---

##### `authentication_config`<sup>Required</sup> <a name="authentication_config" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.authenticationConfig"></a>

```python
authentication_config: QuicksightActionConnectorAuthenticationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authentication_config QuicksightActionConnector#authentication_config}.

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#aws_account_id QuicksightActionConnector#aws_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#name QuicksightActionConnector#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#type QuicksightActionConnector#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#description QuicksightActionConnector#description}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.permissions"></a>

```python
permissions: IResolvable | typing.List[QuicksightActionConnectorPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#permissions QuicksightActionConnector#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightActionConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#tags QuicksightActionConnector#tags}.

---

##### `vpc_connection_arn`<sup>Optional</sup> <a name="vpc_connection_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorConfig.property.vpcConnectionArn"></a>

```python
vpc_connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#vpc_connection_arn QuicksightActionConnector#vpc_connection_arn}.

---

### QuicksightActionConnectorPermissions <a name="QuicksightActionConnectorPermissions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorPermissions(
  actions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal">principal</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#actions QuicksightActionConnector#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#principal QuicksightActionConnector#principal}

---

### QuicksightActionConnectorTags <a name="QuicksightActionConnectorTags" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#key QuicksightActionConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#value QuicksightActionConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint">reset_base_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_endpoint` <a name="reset_base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```python
def reset_base_endpoint() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput">base_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `base_endpoint_input`<sup>Optional</sup> <a name="base_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```python
base_endpoint_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails">put_authorization_code_grant_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails">reset_authorization_code_grant_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_code_grant_details` <a name="put_authorization_code_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails"></a>

```python
def put_authorization_code_grant_details(
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  token_endpoint: str = None
) -> None
```

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_endpoint QuicksightActionConnector#authorization_endpoint}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.putAuthorizationCodeGrantDetails.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

##### `reset_authorization_code_grant_details` <a name="reset_authorization_code_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.resetAuthorizationCodeGrantDetails"></a>

```python
def reset_authorization_code_grant_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails">authorization_code_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput">authorization_code_grant_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_grant_details`<sup>Required</sup> <a name="authorization_code_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetails"></a>

```python
authorization_code_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetailsOutputReference</a>

---

##### `authorization_code_grant_details_input`<sup>Optional</sup> <a name="authorization_code_grant_details_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.authorizationCodeGrantDetailsInput"></a>

```python
authorization_code_grant_details_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails">put_authorization_code_grant_credentials_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails">reset_authorization_code_grant_credentials_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource">reset_authorization_code_grant_credentials_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint">reset_base_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_code_grant_credentials_details` <a name="put_authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails"></a>

```python
def put_authorization_code_grant_credentials_details(
  authorization_code_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails = None
) -> None
```

###### `authorization_code_grant_details`<sup>Optional</sup> <a name="authorization_code_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.putAuthorizationCodeGrantCredentialsDetails.parameter.authorizationCodeGrantDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsAuthorizationCodeGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_details QuicksightActionConnector#authorization_code_grant_details}.

---

##### `reset_authorization_code_grant_credentials_details` <a name="reset_authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsDetails"></a>

```python
def reset_authorization_code_grant_credentials_details() -> None
```

##### `reset_authorization_code_grant_credentials_source` <a name="reset_authorization_code_grant_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetAuthorizationCodeGrantCredentialsSource"></a>

```python
def reset_authorization_code_grant_credentials_source() -> None
```

##### `reset_base_endpoint` <a name="reset_base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetBaseEndpoint"></a>

```python
def reset_base_endpoint() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails">authorization_code_grant_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput">authorization_code_grant_credentials_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput">authorization_code_grant_credentials_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput">base_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource">authorization_code_grant_credentials_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_grant_credentials_details`<sup>Required</sup> <a name="authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetails"></a>

```python
authorization_code_grant_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetailsOutputReference</a>

---

##### `authorization_code_grant_credentials_details_input`<sup>Optional</sup> <a name="authorization_code_grant_credentials_details_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsDetailsInput"></a>

```python
authorization_code_grant_credentials_details_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

---

##### `authorization_code_grant_credentials_source_input`<sup>Optional</sup> <a name="authorization_code_grant_credentials_source_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSourceInput"></a>

```python
authorization_code_grant_credentials_source_input: str
```

- *Type:* str

---

##### `base_endpoint_input`<sup>Optional</sup> <a name="base_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpointInput"></a>

```python
base_endpoint_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `authorization_code_grant_credentials_source`<sup>Required</sup> <a name="authorization_code_grant_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.authorizationCodeGrantCredentialsSource"></a>

```python
authorization_code_grant_credentials_source: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint">reset_base_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_endpoint` <a name="reset_base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```python
def reset_base_endpoint() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput">base_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_endpoint_input`<sup>Optional</sup> <a name="base_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```python
base_endpoint_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails">put_client_credentials_grant_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails">reset_client_credentials_grant_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_credentials_grant_details` <a name="put_client_credentials_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails"></a>

```python
def put_client_credentials_grant_details(
  client_id: str = None,
  client_secret: str = None,
  token_endpoint: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_id QuicksightActionConnector#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_secret QuicksightActionConnector#client_secret}.

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.putClientCredentialsGrantDetails.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#token_endpoint QuicksightActionConnector#token_endpoint}.

---

##### `reset_client_credentials_grant_details` <a name="reset_client_credentials_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.resetClientCredentialsGrantDetails"></a>

```python
def reset_client_credentials_grant_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails">client_credentials_grant_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput">client_credentials_grant_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_credentials_grant_details`<sup>Required</sup> <a name="client_credentials_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetails"></a>

```python
client_credentials_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetailsOutputReference</a>

---

##### `client_credentials_grant_details_input`<sup>Optional</sup> <a name="client_credentials_grant_details_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.clientCredentialsGrantDetailsInput"></a>

```python
client_credentials_grant_details_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails">put_client_credentials_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint">reset_base_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails">reset_client_credentials_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource">reset_client_credentials_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_credentials_details` <a name="put_client_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails"></a>

```python
def put_client_credentials_details(
  client_credentials_grant_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails = None
) -> None
```

###### `client_credentials_grant_details`<sup>Optional</sup> <a name="client_credentials_grant_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.putClientCredentialsDetails.parameter.clientCredentialsGrantDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsClientCredentialsGrantDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_details QuicksightActionConnector#client_credentials_grant_details}.

---

##### `reset_base_endpoint` <a name="reset_base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetBaseEndpoint"></a>

```python
def reset_base_endpoint() -> None
```

##### `reset_client_credentials_details` <a name="reset_client_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsDetails"></a>

```python
def reset_client_credentials_details() -> None
```

##### `reset_client_credentials_source` <a name="reset_client_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.resetClientCredentialsSource"></a>

```python
def reset_client_credentials_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails">client_credentials_details</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput">base_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput">client_credentials_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput">client_credentials_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource">client_credentials_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_credentials_details`<sup>Required</sup> <a name="client_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetails"></a>

```python
client_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetailsOutputReference</a>

---

##### `base_endpoint_input`<sup>Optional</sup> <a name="base_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpointInput"></a>

```python
base_endpoint_input: str
```

- *Type:* str

---

##### `client_credentials_details_input`<sup>Optional</sup> <a name="client_credentials_details_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsDetailsInput"></a>

```python
client_credentials_details_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

---

##### `client_credentials_source_input`<sup>Optional</sup> <a name="client_credentials_source_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSourceInput"></a>

```python
client_credentials_source_input: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `client_credentials_source`<sup>Required</sup> <a name="client_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.clientCredentialsSource"></a>

```python
client_credentials_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint">reset_base_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_endpoint` <a name="reset_base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.resetBaseEndpoint"></a>

```python
def reset_base_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput">base_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint">base_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_endpoint_input`<sup>Optional</sup> <a name="base_endpoint_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpointInput"></a>

```python
base_endpoint_input: str
```

- *Type:* str

---

##### `base_endpoint`<sup>Required</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.baseEndpoint"></a>

```python
base_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference <a name="QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata">put_api_key_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata">put_authorization_code_grant_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata">put_basic_auth_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata">put_client_credentials_grant_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata">put_iam_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata">put_none_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata">reset_api_key_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata">reset_authorization_code_grant_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata">reset_basic_auth_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata">reset_client_credentials_grant_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata">reset_iam_connection_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata">reset_none_connection_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_connection_metadata` <a name="put_api_key_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata"></a>

```python
def put_api_key_connection_metadata(
  api_key: str = None,
  base_endpoint: str = None,
  email: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata.parameter.apiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key QuicksightActionConnector#api_key}.

---

###### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata.parameter.baseEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putApiKeyConnectionMetadata.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#email QuicksightActionConnector#email}.

---

##### `put_authorization_code_grant_metadata` <a name="put_authorization_code_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata"></a>

```python
def put_authorization_code_grant_metadata(
  authorization_code_grant_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails = None,
  authorization_code_grant_credentials_source: str = None,
  base_endpoint: str = None,
  redirect_url: str = None
) -> None
```

###### `authorization_code_grant_credentials_details`<sup>Optional</sup> <a name="authorization_code_grant_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.authorizationCodeGrantCredentialsDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataAuthorizationCodeGrantCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_details QuicksightActionConnector#authorization_code_grant_credentials_details}.

---

###### `authorization_code_grant_credentials_source`<sup>Optional</sup> <a name="authorization_code_grant_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.authorizationCodeGrantCredentialsSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_credentials_source QuicksightActionConnector#authorization_code_grant_credentials_source}.

---

###### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.baseEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

###### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putAuthorizationCodeGrantMetadata.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#redirect_url QuicksightActionConnector#redirect_url}.

---

##### `put_basic_auth_connection_metadata` <a name="put_basic_auth_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata"></a>

```python
def put_basic_auth_connection_metadata(
  base_endpoint: str = None,
  password: str = None,
  username: str = None
) -> None
```

###### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata.parameter.baseEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#password QuicksightActionConnector#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putBasicAuthConnectionMetadata.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#username QuicksightActionConnector#username}.

---

##### `put_client_credentials_grant_metadata` <a name="put_client_credentials_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata"></a>

```python
def put_client_credentials_grant_metadata(
  base_endpoint: str = None,
  client_credentials_details: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails = None,
  client_credentials_source: str = None
) -> None
```

###### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata.parameter.baseEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

###### `client_credentials_details`<sup>Optional</sup> <a name="client_credentials_details" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata.parameter.clientCredentialsDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataClientCredentialsDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_details QuicksightActionConnector#client_credentials_details}.

---

###### `client_credentials_source`<sup>Optional</sup> <a name="client_credentials_source" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putClientCredentialsGrantMetadata.parameter.clientCredentialsSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_source QuicksightActionConnector#client_credentials_source}.

---

##### `put_iam_connection_metadata` <a name="put_iam_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata"></a>

```python
def put_iam_connection_metadata(
  role_arn: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putIamConnectionMetadata.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#role_arn QuicksightActionConnector#role_arn}.

---

##### `put_none_connection_metadata` <a name="put_none_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata"></a>

```python
def put_none_connection_metadata(
  base_endpoint: str = None
) -> None
```

###### `base_endpoint`<sup>Optional</sup> <a name="base_endpoint" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.putNoneConnectionMetadata.parameter.baseEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#base_endpoint QuicksightActionConnector#base_endpoint}.

---

##### `reset_api_key_connection_metadata` <a name="reset_api_key_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetApiKeyConnectionMetadata"></a>

```python
def reset_api_key_connection_metadata() -> None
```

##### `reset_authorization_code_grant_metadata` <a name="reset_authorization_code_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetAuthorizationCodeGrantMetadata"></a>

```python
def reset_authorization_code_grant_metadata() -> None
```

##### `reset_basic_auth_connection_metadata` <a name="reset_basic_auth_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetBasicAuthConnectionMetadata"></a>

```python
def reset_basic_auth_connection_metadata() -> None
```

##### `reset_client_credentials_grant_metadata` <a name="reset_client_credentials_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetClientCredentialsGrantMetadata"></a>

```python
def reset_client_credentials_grant_metadata() -> None
```

##### `reset_iam_connection_metadata` <a name="reset_iam_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetIamConnectionMetadata"></a>

```python
def reset_iam_connection_metadata() -> None
```

##### `reset_none_connection_metadata` <a name="reset_none_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.resetNoneConnectionMetadata"></a>

```python
def reset_none_connection_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata">api_key_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata">authorization_code_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata">basic_auth_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata">client_credentials_grant_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata">iam_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata">none_connection_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput">api_key_connection_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput">authorization_code_grant_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput">basic_auth_connection_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput">client_credentials_grant_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput">iam_connection_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput">none_connection_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_connection_metadata`<sup>Required</sup> <a name="api_key_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadata"></a>

```python
api_key_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadataOutputReference</a>

---

##### `authorization_code_grant_metadata`<sup>Required</sup> <a name="authorization_code_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadata"></a>

```python
authorization_code_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadataOutputReference</a>

---

##### `basic_auth_connection_metadata`<sup>Required</sup> <a name="basic_auth_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadata"></a>

```python
basic_auth_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadataOutputReference</a>

---

##### `client_credentials_grant_metadata`<sup>Required</sup> <a name="client_credentials_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadata"></a>

```python
client_credentials_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadataOutputReference</a>

---

##### `iam_connection_metadata`<sup>Required</sup> <a name="iam_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadata"></a>

```python
iam_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadataOutputReference</a>

---

##### `none_connection_metadata`<sup>Required</sup> <a name="none_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadata"></a>

```python
none_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadataOutputReference</a>

---

##### `api_key_connection_metadata_input`<sup>Optional</sup> <a name="api_key_connection_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.apiKeyConnectionMetadataInput"></a>

```python
api_key_connection_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

---

##### `authorization_code_grant_metadata_input`<sup>Optional</sup> <a name="authorization_code_grant_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.authorizationCodeGrantMetadataInput"></a>

```python
authorization_code_grant_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

---

##### `basic_auth_connection_metadata_input`<sup>Optional</sup> <a name="basic_auth_connection_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.basicAuthConnectionMetadataInput"></a>

```python
basic_auth_connection_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

---

##### `client_credentials_grant_metadata_input`<sup>Optional</sup> <a name="client_credentials_grant_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.clientCredentialsGrantMetadataInput"></a>

```python
client_credentials_grant_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

---

##### `iam_connection_metadata_input`<sup>Optional</sup> <a name="iam_connection_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.iamConnectionMetadataInput"></a>

```python
iam_connection_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

---

##### `none_connection_metadata_input`<sup>Optional</sup> <a name="none_connection_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.noneConnectionMetadataInput"></a>

```python
none_connection_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---


### QuicksightActionConnectorAuthenticationConfigOutputReference <a name="QuicksightActionConnectorAuthenticationConfigOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata">put_authentication_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_metadata` <a name="put_authentication_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata"></a>

```python
def put_authentication_metadata(
  api_key_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata = None,
  authorization_code_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata = None,
  basic_auth_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata = None,
  client_credentials_grant_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata = None,
  iam_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata = None,
  none_connection_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata = None
) -> None
```

###### `api_key_connection_metadata`<sup>Optional</sup> <a name="api_key_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.apiKeyConnectionMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataApiKeyConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#api_key_connection_metadata QuicksightActionConnector#api_key_connection_metadata}.

---

###### `authorization_code_grant_metadata`<sup>Optional</sup> <a name="authorization_code_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.authorizationCodeGrantMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataAuthorizationCodeGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#authorization_code_grant_metadata QuicksightActionConnector#authorization_code_grant_metadata}.

---

###### `basic_auth_connection_metadata`<sup>Optional</sup> <a name="basic_auth_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.basicAuthConnectionMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataBasicAuthConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#basic_auth_connection_metadata QuicksightActionConnector#basic_auth_connection_metadata}.

---

###### `client_credentials_grant_metadata`<sup>Optional</sup> <a name="client_credentials_grant_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.clientCredentialsGrantMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataClientCredentialsGrantMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#client_credentials_grant_metadata QuicksightActionConnector#client_credentials_grant_metadata}.

---

###### `iam_connection_metadata`<sup>Optional</sup> <a name="iam_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.iamConnectionMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataIamConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#iam_connection_metadata QuicksightActionConnector#iam_connection_metadata}.

---

###### `none_connection_metadata`<sup>Optional</sup> <a name="none_connection_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.putAuthenticationMetadata.parameter.noneConnectionMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataNoneConnectionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_action_connector#none_connection_metadata QuicksightActionConnector#none_connection_metadata}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata">authentication_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput">authentication_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_metadata`<sup>Required</sup> <a name="authentication_metadata" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadata"></a>

```python
authentication_metadata: QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadataOutputReference</a>

---

##### `authentication_metadata_input`<sup>Optional</sup> <a name="authentication_metadata_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationMetadataInput"></a>

```python
authentication_metadata_input: IResolvable | QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata">QuicksightActionConnectorAuthenticationConfigAuthenticationMetadata</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorAuthenticationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorAuthenticationConfig">QuicksightActionConnectorAuthenticationConfig</a>

---


### QuicksightActionConnectorPermissionsList <a name="QuicksightActionConnectorPermissionsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightActionConnectorPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightActionConnectorPermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>]

---


### QuicksightActionConnectorPermissionsOutputReference <a name="QuicksightActionConnectorPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorPermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorPermissions">QuicksightActionConnectorPermissions</a>

---


### QuicksightActionConnectorTagsList <a name="QuicksightActionConnectorTagsList" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightActionConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightActionConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>]

---


### QuicksightActionConnectorTagsOutputReference <a name="QuicksightActionConnectorTagsOutputReference" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_action_connector

quicksightActionConnector.QuicksightActionConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightActionConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightActionConnector.QuicksightActionConnectorTags">QuicksightActionConnectorTags</a>

---



