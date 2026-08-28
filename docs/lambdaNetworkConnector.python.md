# `lambdaNetworkConnector` Submodule <a name="`lambdaNetworkConnector` Submodule" id="@cdktn/provider-awscc.lambdaNetworkConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaNetworkConnector <a name="LambdaNetworkConnector" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector awscc_lambda_network_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: LambdaNetworkConnectorConfiguration,
  name: str = None,
  operator_role: str = None,
  tags: IResolvable | typing.List[LambdaNetworkConnectorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a></code> | The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name for the network connector within your account and Region. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.operatorRole">operator_role</a></code> | <code>str</code> | The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]</code> | A list of tags to apply to the network connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a>

The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#configuration LambdaNetworkConnector#configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.name"></a>

- *Type:* str

A unique name for the network connector within your account and Region.

Must be 1 to 64 alphanumeric characters, hyphens, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#name LambdaNetworkConnector#name}

---

##### `operator_role`<sup>Optional</sup> <a name="operator_role" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.operatorRole"></a>

- *Type:* str

The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC.

This role must have permissions for ec2:CreateNetworkInterface and related describe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#operator_role LambdaNetworkConnector#operator_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]

A list of tags to apply to the network connector.

Use tags to categorize network connectors for cost allocation, access control, or operational management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#tags LambdaNetworkConnector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetOperatorRole">reset_operator_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putConfiguration"></a>

```python
def put_configuration(
  vpc_egress_configuration: LambdaNetworkConnectorConfigurationVpcEgressConfiguration
) -> None
```

###### `vpc_egress_configuration`<sup>Required</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putConfiguration.parameter.vpcEgressConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a>

The VPC egress configuration for the network connector.

Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#vpc_egress_configuration LambdaNetworkConnector#vpc_egress_configuration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LambdaNetworkConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_operator_role` <a name="reset_operator_role" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetOperatorRole"></a>

```python
def reset_operator_role() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaNetworkConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaNetworkConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaNetworkConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaNetworkConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaNetworkConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference">LambdaNetworkConnectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList">LambdaNetworkConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.operatorRoleInput">operator_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.operatorRole">operator_role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.configuration"></a>

```python
configuration: LambdaNetworkConnectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference">LambdaNetworkConnectorConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tags"></a>

```python
tags: LambdaNetworkConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList">LambdaNetworkConnectorTagsList</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.configurationInput"></a>

```python
configuration_input: IResolvable | LambdaNetworkConnectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operator_role_input`<sup>Optional</sup> <a name="operator_role_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.operatorRoleInput"></a>

```python
operator_role_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LambdaNetworkConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator_role`<sup>Required</sup> <a name="operator_role" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.operatorRole"></a>

```python
operator_role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaNetworkConnectorConfig <a name="LambdaNetworkConnectorConfig" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: LambdaNetworkConnectorConfiguration,
  name: str = None,
  operator_role: str = None,
  tags: IResolvable | typing.List[LambdaNetworkConnectorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a></code> | The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.name">name</a></code> | <code>str</code> | A unique name for the network connector within your account and Region. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.operatorRole">operator_role</a></code> | <code>str</code> | The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]</code> | A list of tags to apply to the network connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.configuration"></a>

```python
configuration: LambdaNetworkConnectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a>

The network configuration for the connector. Specify a VpcEgressConfiguration to enable outbound traffic routing through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#configuration LambdaNetworkConnector#configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name for the network connector within your account and Region.

Must be 1 to 64 alphanumeric characters, hyphens, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#name LambdaNetworkConnector#name}

---

##### `operator_role`<sup>Optional</sup> <a name="operator_role" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.operatorRole"></a>

```python
operator_role: str
```

- *Type:* str

The ARN of the IAM role that Lambda assumes to manage elastic network interfaces in your VPC.

This role must have permissions for ec2:CreateNetworkInterface and related describe operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#operator_role LambdaNetworkConnector#operator_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LambdaNetworkConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]

A list of tags to apply to the network connector.

Use tags to categorize network connectors for cost allocation, access control, or operational management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#tags LambdaNetworkConnector#tags}

---

### LambdaNetworkConnectorConfiguration <a name="LambdaNetworkConnectorConfiguration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorConfiguration(
  vpc_egress_configuration: LambdaNetworkConnectorConfigurationVpcEgressConfiguration
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration.property.vpcEgressConfiguration">vpc_egress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | The VPC egress configuration for the network connector. |

---

##### `vpc_egress_configuration`<sup>Required</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration.property.vpcEgressConfiguration"></a>

```python
vpc_egress_configuration: LambdaNetworkConnectorConfigurationVpcEgressConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a>

The VPC egress configuration for the network connector.

Specifies the subnets, security groups, and network protocol for routing outbound traffic through your VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#vpc_egress_configuration LambdaNetworkConnector#vpc_egress_configuration}

---

### LambdaNetworkConnectorConfigurationVpcEgressConfiguration <a name="LambdaNetworkConnectorConfigurationVpcEgressConfiguration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration(
  associated_compute_resource_types: typing.List[str],
  subnet_ids: typing.List[str],
  network_protocol: str = None,
  security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes">associated_compute_resource_types</a></code> | <code>typing.List[str]</code> | The types of Lambda compute resources that can use this connector. Currently, only MicroVm is supported. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol">network_protocol</a></code> | <code>str</code> | The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the VPC security groups to attach to the ENIs. |

---

##### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.associatedComputeResourceTypes"></a>

```python
associated_compute_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of Lambda compute resources that can use this connector. Currently, only MicroVm is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#associated_compute_resource_types LambdaNetworkConnector#associated_compute_resource_types}

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs).

Specify 1 to 16 subnets. All subnets must be in the same VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#subnet_ids LambdaNetworkConnector#subnet_ids}

---

##### `network_protocol`<sup>Optional</sup> <a name="network_protocol" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.networkProtocol"></a>

```python
network_protocol: str
```

- *Type:* str

The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#network_protocol LambdaNetworkConnector#network_protocol}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the VPC security groups to attach to the ENIs.

Specify 0 to 5 security groups. All security groups must be in the same VPC as the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#security_group_ids LambdaNetworkConnector#security_group_ids}

---

### LambdaNetworkConnectorTags <a name="LambdaNetworkConnectorTags" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#key LambdaNetworkConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#value LambdaNetworkConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaNetworkConnectorConfigurationOutputReference <a name="LambdaNetworkConnectorConfigurationOutputReference" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration">put_vpc_egress_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_egress_configuration` <a name="put_vpc_egress_configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration"></a>

```python
def put_vpc_egress_configuration(
  associated_compute_resource_types: typing.List[str],
  subnet_ids: typing.List[str],
  network_protocol: str = None,
  security_group_ids: typing.List[str] = None
) -> None
```

###### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.associatedComputeResourceTypes"></a>

- *Type:* typing.List[str]

The types of Lambda compute resources that can use this connector. Currently, only MicroVm is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#associated_compute_resource_types LambdaNetworkConnector#associated_compute_resource_types}

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs).

Specify 1 to 16 subnets. All subnets must be in the same VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#subnet_ids LambdaNetworkConnector#subnet_ids}

---

###### `network_protocol`<sup>Optional</sup> <a name="network_protocol" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.networkProtocol"></a>

- *Type:* str

The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#network_protocol LambdaNetworkConnector#network_protocol}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.putVpcEgressConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of the VPC security groups to attach to the ENIs.

Specify 0 to 5 security groups. All security groups must be in the same VPC as the subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_network_connector#security_group_ids LambdaNetworkConnector#security_group_ids}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration">vpc_egress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference">LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput">vpc_egress_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_egress_configuration`<sup>Required</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration"></a>

```python
vpc_egress_configuration: LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference">LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference</a>

---

##### `vpc_egress_configuration_input`<sup>Optional</sup> <a name="vpc_egress_configuration_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfigurationInput"></a>

```python
vpc_egress_configuration_input: IResolvable | LambdaNetworkConnectorConfigurationVpcEgressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaNetworkConnectorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfiguration">LambdaNetworkConnectorConfiguration</a>

---


### LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference <a name="LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol">reset_network_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_protocol` <a name="reset_network_protocol" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetNetworkProtocol"></a>

```python
def reset_network_protocol() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput">associated_compute_resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput">network_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes">associated_compute_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol">network_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_compute_resource_types_input`<sup>Optional</sup> <a name="associated_compute_resource_types_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypesInput"></a>

```python
associated_compute_resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_protocol_input`<sup>Optional</sup> <a name="network_protocol_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocolInput"></a>

```python
network_protocol_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes"></a>

```python
associated_compute_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_protocol`<sup>Required</sup> <a name="network_protocol" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol"></a>

```python
network_protocol: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaNetworkConnectorConfigurationVpcEgressConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorConfigurationVpcEgressConfiguration">LambdaNetworkConnectorConfigurationVpcEgressConfiguration</a>

---


### LambdaNetworkConnectorTagsList <a name="LambdaNetworkConnectorTagsList" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaNetworkConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaNetworkConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>]

---


### LambdaNetworkConnectorTagsOutputReference <a name="LambdaNetworkConnectorTagsOutputReference" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_network_connector

lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaNetworkConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaNetworkConnector.LambdaNetworkConnectorTags">LambdaNetworkConnectorTags</a>

---



