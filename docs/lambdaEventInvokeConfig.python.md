# `lambdaEventInvokeConfig` Submodule <a name="`lambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.lambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventInvokeConfig <a name="LambdaEventInvokeConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfig(
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
  qualifier: str,
  destination_config: LambdaEventInvokeConfigDestinationConfig = None,
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry when the function returns an error. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.qualifier"></a>

- *Type:* str

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig">put_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig">reset_destination_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_config` <a name="put_destination_config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig"></a>

```python
def put_destination_config(
  on_failure: LambdaEventInvokeConfigDestinationConfigOnFailure = None,
  on_success: LambdaEventInvokeConfigDestinationConfigOnSuccess = None
) -> None
```

###### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig.parameter.onFailure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#on_failure LambdaEventInvokeConfig#on_failure}

---

###### `on_success`<sup>Optional</sup> <a name="on_success" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig.parameter.onSuccess"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

The destination configuration for successful invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#on_success LambdaEventInvokeConfig#on_success}

---

##### `reset_destination_config` <a name="reset_destination_config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig"></a>

```python
def reset_destination_config() -> None
```

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaEventInvokeConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput">destination_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig"></a>

```python
destination_config: LambdaEventInvokeConfigDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `destination_config_input`<sup>Optional</sup> <a name="destination_config_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput"></a>

```python
destination_config_input: IResolvable | LambdaEventInvokeConfigDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventInvokeConfigConfig <a name="LambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  function_name: str,
  qualifier: str,
  destination_config: LambdaEventInvokeConfigDestinationConfig = None,
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier">qualifier</a></code> | <code>str</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times to retry when the function returns an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `destination_config`<sup>Optional</sup> <a name="destination_config" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig"></a>

```python
destination_config: LambdaEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

### LambdaEventInvokeConfigDestinationConfig <a name="LambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig(
  on_failure: LambdaEventInvokeConfigDestinationConfigOnFailure = None,
  on_success: LambdaEventInvokeConfigDestinationConfigOnSuccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess">on_success</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | The destination configuration for successful invocations. |

---

##### `on_failure`<sup>Optional</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure"></a>

```python
on_failure: LambdaEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#on_failure LambdaEventInvokeConfig#on_failure}

---

##### `on_success`<sup>Optional</sup> <a name="on_success" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```python
on_success: LambdaEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

The destination configuration for successful invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#on_success LambdaEventInvokeConfig#on_success}

---

### LambdaEventInvokeConfigDestinationConfigOnFailure <a name="LambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination">destination</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```python
destination: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

### LambdaEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess(
  destination: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination">destination</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```python
destination: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination">reset_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaEventInvokeConfigDestinationConfigOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_event_invoke_config

lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure">put_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">put_on_success</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">reset_on_failure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">reset_on_success</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_failure` <a name="put_on_failure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```python
def put_on_failure(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.destination"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

##### `put_on_success` <a name="put_on_success" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```python
def put_on_success(
  destination: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.destination"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

##### `reset_on_failure` <a name="reset_on_failure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```python
def reset_on_failure() -> None
```

##### `reset_on_success` <a name="reset_on_success" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```python
def reset_on_success() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">on_success</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">on_failure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">on_success_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```python
on_failure: LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `on_success`<sup>Required</sup> <a name="on_success" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```python
on_success: LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `on_failure_input`<sup>Optional</sup> <a name="on_failure_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```python
on_failure_input: IResolvable | LambdaEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `on_success_input`<sup>Optional</sup> <a name="on_success_input" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```python
on_success_input: IResolvable | LambdaEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaEventInvokeConfigDestinationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---



