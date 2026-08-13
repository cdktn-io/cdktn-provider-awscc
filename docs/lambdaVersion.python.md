# `lambdaVersion` Submodule <a name="`lambdaVersion` Submodule" id="@cdktn/provider-awscc.lambdaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaVersion <a name="LambdaVersion" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version awscc_lambda_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersion(
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
  code_sha256: str = None,
  description: str = None,
  function_scaling_config: LambdaVersionFunctionScalingConfig = None,
  provisioned_concurrency_config: LambdaVersionProvisionedConcurrencyConfig = None,
  runtime_policy: LambdaVersionRuntimePolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.codeSha256">code_sha256</a></code> | <code>str</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.runtimePolicy">runtime_policy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `code_sha256`<sup>Optional</sup> <a name="code_sha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.codeSha256"></a>

- *Type:* str

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.description"></a>

- *Type:* str

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `function_scaling_config`<sup>Optional</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.functionScalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `provisioned_concurrency_config`<sup>Optional</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.provisionedConcurrencyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `runtime_policy`<sup>Optional</sup> <a name="runtime_policy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.runtimePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig">put_function_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig">put_provisioned_concurrency_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy">put_runtime_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256">reset_code_sha256</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig">reset_function_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig">reset_provisioned_concurrency_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy">reset_runtime_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_function_scaling_config` <a name="put_function_scaling_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig"></a>

```python
def put_function_scaling_config(
  max_execution_environments: typing.Union[int, float] = None,
  min_execution_environments: typing.Union[int, float] = None
) -> None
```

###### `max_execution_environments`<sup>Optional</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig.parameter.maxExecutionEnvironments"></a>

- *Type:* typing.Union[int, float]

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#max_execution_environments LambdaVersion#max_execution_environments}

---

###### `min_execution_environments`<sup>Optional</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig.parameter.minExecutionEnvironments"></a>

- *Type:* typing.Union[int, float]

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#min_execution_environments LambdaVersion#min_execution_environments}

---

##### `put_provisioned_concurrency_config` <a name="put_provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig"></a>

```python
def put_provisioned_concurrency_config(
  provisioned_concurrent_executions: typing.Union[int, float] = None
) -> None
```

###### `provisioned_concurrent_executions`<sup>Optional</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig.parameter.provisionedConcurrentExecutions"></a>

- *Type:* typing.Union[int, float]

The amount of provisioned concurrency to allocate for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#provisioned_concurrent_executions LambdaVersion#provisioned_concurrent_executions}

---

##### `put_runtime_policy` <a name="put_runtime_policy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy"></a>

```python
def put_runtime_policy(
  runtime_version_arn: str = None,
  update_runtime_on: str = None
) -> None
```

###### `runtime_version_arn`<sup>Optional</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy.parameter.runtimeVersionArn"></a>

- *Type:* str

The ARN of the runtime the function is configured to use.

If the runtime update mode is manual, the ARN is returned, otherwise null is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#runtime_version_arn LambdaVersion#runtime_version_arn}

---

###### `update_runtime_on`<sup>Optional</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy.parameter.updateRuntimeOn"></a>

- *Type:* str

The runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#update_runtime_on LambdaVersion#update_runtime_on}

---

##### `reset_code_sha256` <a name="reset_code_sha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256"></a>

```python
def reset_code_sha256() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_function_scaling_config` <a name="reset_function_scaling_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig"></a>

```python
def reset_function_scaling_config() -> None
```

##### `reset_provisioned_concurrency_config` <a name="reset_provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig"></a>

```python
def reset_provisioned_concurrency_config() -> None
```

##### `reset_runtime_policy` <a name="reset_runtime_policy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy"></a>

```python
def reset_runtime_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy">runtime_policy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input">code_sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput">function_scaling_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput">provisioned_concurrency_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput">runtime_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256">code_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_scaling_config`<sup>Required</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig"></a>

```python
function_scaling_config: LambdaVersionFunctionScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioned_concurrency_config`<sup>Required</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig"></a>

```python
provisioned_concurrency_config: LambdaVersionProvisionedConcurrencyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a>

---

##### `runtime_policy`<sup>Required</sup> <a name="runtime_policy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy"></a>

```python
runtime_policy: LambdaVersionRuntimePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `code_sha256_input`<sup>Optional</sup> <a name="code_sha256_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input"></a>

```python
code_sha256_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_scaling_config_input`<sup>Optional</sup> <a name="function_scaling_config_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput"></a>

```python
function_scaling_config_input: IResolvable | LambdaVersionFunctionScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `provisioned_concurrency_config_input`<sup>Optional</sup> <a name="provisioned_concurrency_config_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput"></a>

```python
provisioned_concurrency_config_input: IResolvable | LambdaVersionProvisionedConcurrencyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `runtime_policy_input`<sup>Optional</sup> <a name="runtime_policy_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput"></a>

```python
runtime_policy_input: IResolvable | LambdaVersionRuntimePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `code_sha256`<sup>Required</sup> <a name="code_sha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256"></a>

```python
code_sha256: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaVersionConfig <a name="LambdaVersionConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  code_sha256: str = None,
  description: str = None,
  function_scaling_config: LambdaVersionFunctionScalingConfig = None,
  provisioned_concurrency_config: LambdaVersionProvisionedConcurrencyConfig = None,
  runtime_policy: LambdaVersionRuntimePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256">code_sha256</a></code> | <code>str</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description">description</a></code> | <code>str</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig">provisioned_concurrency_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy">runtime_policy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `code_sha256`<sup>Optional</sup> <a name="code_sha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256"></a>

```python
code_sha256: str
```

- *Type:* str

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `function_scaling_config`<sup>Optional</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig"></a>

```python
function_scaling_config: LambdaVersionFunctionScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `provisioned_concurrency_config`<sup>Optional</sup> <a name="provisioned_concurrency_config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig"></a>

```python
provisioned_concurrency_config: LambdaVersionProvisionedConcurrencyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `runtime_policy`<sup>Optional</sup> <a name="runtime_policy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy"></a>

```python
runtime_policy: LambdaVersionRuntimePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

### LambdaVersionFunctionScalingConfig <a name="LambdaVersionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionFunctionScalingConfig(
  max_execution_environments: typing.Union[int, float] = None,
  min_execution_environments: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments">max_execution_environments</a></code> | <code>typing.Union[int, float]</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments">min_execution_environments</a></code> | <code>typing.Union[int, float]</code> | The minimum number of execution environments to maintain for the function. |

---

##### `max_execution_environments`<sup>Optional</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```python
max_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#max_execution_environments LambdaVersion#max_execution_environments}

---

##### `min_execution_environments`<sup>Optional</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```python
min_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#min_execution_environments LambdaVersion#min_execution_environments}

---

### LambdaVersionProvisionedConcurrencyConfig <a name="LambdaVersionProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionProvisionedConcurrencyConfig(
  provisioned_concurrent_executions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisioned_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | The amount of provisioned concurrency to allocate for the version. |

---

##### `provisioned_concurrent_executions`<sup>Optional</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```python
provisioned_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of provisioned concurrency to allocate for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#provisioned_concurrent_executions LambdaVersion#provisioned_concurrent_executions}

---

### LambdaVersionRuntimePolicy <a name="LambdaVersionRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionRuntimePolicy(
  runtime_version_arn: str = None,
  update_runtime_on: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | The ARN of the runtime the function is configured to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn">update_runtime_on</a></code> | <code>str</code> | The runtime update mode. |

---

##### `runtime_version_arn`<sup>Optional</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

The ARN of the runtime the function is configured to use.

If the runtime update mode is manual, the ARN is returned, otherwise null is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#runtime_version_arn LambdaVersion#runtime_version_arn}

---

##### `update_runtime_on`<sup>Optional</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn"></a>

```python
update_runtime_on: str
```

- *Type:* str

The runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_version#update_runtime_on LambdaVersion#update_runtime_on}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaVersionFunctionScalingConfigOutputReference <a name="LambdaVersionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">reset_max_execution_environments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">reset_min_execution_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_execution_environments` <a name="reset_max_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```python
def reset_max_execution_environments() -> None
```

##### `reset_min_execution_environments` <a name="reset_min_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```python
def reset_min_execution_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">max_execution_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">min_execution_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">max_execution_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">min_execution_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_execution_environments_input`<sup>Optional</sup> <a name="max_execution_environments_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```python
max_execution_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_execution_environments_input`<sup>Optional</sup> <a name="min_execution_environments_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```python
min_execution_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_environments`<sup>Required</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```python
max_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_execution_environments`<sup>Required</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```python
min_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaVersionFunctionScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---


### LambdaVersionProvisionedConcurrencyConfigOutputReference <a name="LambdaVersionProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">reset_provisioned_concurrent_executions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_provisioned_concurrent_executions` <a name="reset_provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```python
def reset_provisioned_concurrent_executions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">provisioned_concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">provisioned_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_concurrent_executions_input`<sup>Optional</sup> <a name="provisioned_concurrent_executions_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```python
provisioned_concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_concurrent_executions`<sup>Required</sup> <a name="provisioned_concurrent_executions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```python
provisioned_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaVersionProvisionedConcurrencyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---


### LambdaVersionRuntimePolicyOutputReference <a name="LambdaVersionRuntimePolicyOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_version

lambdaVersion.LambdaVersionRuntimePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn">reset_runtime_version_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn">reset_update_runtime_on</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_runtime_version_arn` <a name="reset_runtime_version_arn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn"></a>

```python
def reset_runtime_version_arn() -> None
```

##### `reset_update_runtime_on` <a name="reset_update_runtime_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn"></a>

```python
def reset_update_runtime_on() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput">runtime_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput">update_runtime_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn">update_runtime_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_version_arn_input`<sup>Optional</sup> <a name="runtime_version_arn_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput"></a>

```python
runtime_version_arn_input: str
```

- *Type:* str

---

##### `update_runtime_on_input`<sup>Optional</sup> <a name="update_runtime_on_input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput"></a>

```python
update_runtime_on_input: str
```

- *Type:* str

---

##### `runtime_version_arn`<sup>Required</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

---

##### `update_runtime_on`<sup>Required</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn"></a>

```python
update_runtime_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaVersionRuntimePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---



