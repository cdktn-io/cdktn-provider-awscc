# `lambdaAlias` Submodule <a name="`lambdaAlias` Submodule" id="@cdktn/provider-awscc.lambdaAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaAlias <a name="LambdaAlias" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias awscc_lambda_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAlias(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  function_version: str,
  name: str,
  description: str = None,
  provisioned_concurrency_config: LambdaAliasProvisionedConcurrencyConfig = None,
  routing_config: LambdaAliasRoutingConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion">function_version</a></code> | <code>str</code> | The function version that the alias invokes. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | The routing configuration of the alias. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_name LambdaAlias#function_name}

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion"></a>

- *Type:* str

The function version that the alias invokes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.name"></a>

- *Type:* str

The name of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#name LambdaAlias#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.description"></a>

- *Type:* str

A description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#description LambdaAlias#description}

---

##### `provisioned_concurrency_config`<sup>Optional</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.provisionedConcurrencyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#provisioned_concurrency_config LambdaAlias#provisioned_concurrency_config}

---

##### `routing_config`<sup>Optional</sup> <a name="routing_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

The routing configuration of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#routing_config LambdaAlias#routing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig">put_provisioned_concurrency_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig">put_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetProvisionedConcurrencyConfig">reset_provisioned_concurrency_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetRoutingConfig">reset_routing_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provisioned_concurrency_config` <a name="put_provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig"></a>

```python
def put_provisioned_concurrency_config(
  provisioned_concurrent_executions: typing.Union[int, float] = None
) -> None
```

###### `provisioned_concurrent_executions`<sup>Optional</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putProvisionedConcurrencyConfig.parameter.provisionedConcurrentExecutions"></a>

- *Type:* typing.Union[int, float]

The amount of provisioned concurrency to allocate for the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#provisioned_concurrent_executions LambdaAlias#provisioned_concurrent_executions}

---

##### `put_routing_config` <a name="put_routing_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig"></a>

```python
def put_routing_config(
  additional_version_weights: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights] = None
) -> None
```

###### `additional_version_weights`<sup>Optional</sup> <a name="additional_version_weights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.putRoutingConfig.parameter.additionalVersionWeights"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]

The second version, and the percentage of traffic that's routed to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_provisioned_concurrency_config` <a name="reset_provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetProvisionedConcurrencyConfig"></a>

```python
def reset_provisioned_concurrency_config() -> None
```

##### `reset_routing_config` <a name="reset_routing_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.resetRoutingConfig"></a>

```python
def reset_routing_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.aliasArn">alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference">LambdaAliasProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersionInput">function_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfigInput">provisioned_concurrency_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfigInput">routing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersion">function_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_arn`<sup>Required</sup> <a name="alias_arn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.aliasArn"></a>

```python
alias_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioned_concurrency_config`<sup>Required</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfig"></a>

```python
provisioned_concurrency_config: LambdaAliasProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference">LambdaAliasProvisionedConcurrencyConfigOutputReference</a>

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfig"></a>

```python
routing_config: LambdaAliasRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_version_input`<sup>Optional</sup> <a name="function_version_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersionInput"></a>

```python
function_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provisioned_concurrency_config_input`<sup>Optional</sup> <a name="provisioned_concurrency_config_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.provisionedConcurrencyConfigInput"></a>

```python
provisioned_concurrency_config_input: IResolvable | LambdaAliasProvisionedConcurrencyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

---

##### `routing_config_input`<sup>Optional</sup> <a name="routing_config_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.routingConfigInput"></a>

```python
routing_config_input: IResolvable | LambdaAliasRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaAlias.LambdaAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaAliasConfig <a name="LambdaAliasConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  function_version: str,
  name: str,
  description: str = None,
  provisioned_concurrency_config: LambdaAliasProvisionedConcurrencyConfig = None,
  routing_config: LambdaAliasRoutingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionVersion">function_version</a></code> | <code>str</code> | The function version that the alias invokes. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.name">name</a></code> | <code>str</code> | The name of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.description">description</a></code> | <code>str</code> | A description of the alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | The routing configuration of the alias. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_name LambdaAlias#function_name}

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

The function version that the alias invokes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#name LambdaAlias#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#description LambdaAlias#description}

---

##### `provisioned_concurrency_config`<sup>Optional</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.provisionedConcurrencyConfig"></a>

```python
provisioned_concurrency_config: LambdaAliasProvisionedConcurrencyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#provisioned_concurrency_config LambdaAlias#provisioned_concurrency_config}

---

##### `routing_config`<sup>Optional</sup> <a name="routing_config" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasConfig.property.routingConfig"></a>

```python
routing_config: LambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

The routing configuration of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#routing_config LambdaAlias#routing_config}

---

### LambdaAliasProvisionedConcurrencyConfig <a name="LambdaAliasProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasProvisionedConcurrencyConfig(
  provisioned_concurrent_executions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisioned_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | The amount of provisioned concurrency to allocate for the alias. |

---

##### `provisioned_concurrent_executions`<sup>Optional</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```python
provisioned_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of provisioned concurrency to allocate for the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#provisioned_concurrent_executions LambdaAlias#provisioned_concurrent_executions}

---

### LambdaAliasRoutingConfig <a name="LambdaAliasRoutingConfig" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasRoutingConfig(
  additional_version_weights: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights">additional_version_weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]</code> | The second version, and the percentage of traffic that's routed to it. |

---

##### `additional_version_weights`<sup>Optional</sup> <a name="additional_version_weights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights"></a>

```python
additional_version_weights: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]

The second version, and the percentage of traffic that's routed to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}

---

### LambdaAliasRoutingConfigAdditionalVersionWeights <a name="LambdaAliasRoutingConfigAdditionalVersionWeights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights(
  function_version: str = None,
  function_weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionVersion">function_version</a></code> | <code>str</code> | The qualifier of the second version. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionWeight">function_weight</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic that the alias routes to the second version. |

---

##### `function_version`<sup>Optional</sup> <a name="function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

The qualifier of the second version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}

---

##### `function_weight`<sup>Optional</sup> <a name="function_weight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights.property.functionWeight"></a>

```python
function_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic that the alias routes to the second version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_alias#function_weight LambdaAlias#function_weight}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaAliasProvisionedConcurrencyConfigOutputReference <a name="LambdaAliasProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">reset_provisioned_concurrent_executions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provisioned_concurrent_executions` <a name="reset_provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```python
def reset_provisioned_concurrent_executions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">provisioned_concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">provisioned_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_concurrent_executions_input`<sup>Optional</sup> <a name="provisioned_concurrent_executions_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```python
provisioned_concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_concurrent_executions`<sup>Required</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```python
provisioned_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaAliasProvisionedConcurrencyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasProvisionedConcurrencyConfig">LambdaAliasProvisionedConcurrencyConfig</a>

---


### LambdaAliasRoutingConfigAdditionalVersionWeightsList <a name="LambdaAliasRoutingConfigAdditionalVersionWeightsList" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]

---


### LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference <a name="LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionVersion">reset_function_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionWeight">reset_function_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_version` <a name="reset_function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionVersion"></a>

```python
def reset_function_version() -> None
```

##### `reset_function_weight` <a name="reset_function_weight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.resetFunctionWeight"></a>

```python
def reset_function_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersionInput">function_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeightInput">function_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion">function_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight">function_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_version_input`<sup>Optional</sup> <a name="function_version_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersionInput"></a>

```python
function_version_input: str
```

- *Type:* str

---

##### `function_weight_input`<sup>Optional</sup> <a name="function_weight_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeightInput"></a>

```python
function_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

---

##### `function_weight`<sup>Required</sup> <a name="function_weight" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.functionWeight"></a>

```python
function_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaAliasRoutingConfigAdditionalVersionWeights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>

---


### LambdaAliasRoutingConfigOutputReference <a name="LambdaAliasRoutingConfigOutputReference" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_alias

lambdaAlias.LambdaAliasRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights">put_additional_version_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights">reset_additional_version_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_version_weights` <a name="put_additional_version_weights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights"></a>

```python
def put_additional_version_weights(
  value: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.putAdditionalVersionWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]

---

##### `reset_additional_version_weights` <a name="reset_additional_version_weights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights"></a>

```python
def reset_additional_version_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights">additional_version_weights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList">LambdaAliasRoutingConfigAdditionalVersionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput">additional_version_weights_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_version_weights`<sup>Required</sup> <a name="additional_version_weights" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights"></a>

```python
additional_version_weights: LambdaAliasRoutingConfigAdditionalVersionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeightsList">LambdaAliasRoutingConfigAdditionalVersionWeightsList</a>

---

##### `additional_version_weights_input`<sup>Optional</sup> <a name="additional_version_weights_input" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput"></a>

```python
additional_version_weights_input: IResolvable | typing.List[LambdaAliasRoutingConfigAdditionalVersionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigAdditionalVersionWeights">LambdaAliasRoutingConfigAdditionalVersionWeights</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaAliasRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---



