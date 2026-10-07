# `lambdaWebFunctionEndpoint` Submodule <a name="`lambdaWebFunctionEndpoint` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionEndpoint <a name="LambdaWebFunctionEndpoint" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  endpoint_name: str,
  endpoint_type: str,
  function_name: str,
  description: str = None,
  regions: typing.List[str] = None,
  revision_weights: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights] = None,
  scaling_config: LambdaWebFunctionEndpointScalingConfig = None,
  throttle_config: LambdaWebFunctionEndpointThrottleConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | The authentication type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | The type of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the web function this endpoint belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | The list of AWS Regions for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.revisionWeights">revision_weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]</code> | List of revision routing entries. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | The scaling configuration for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | The throttling configuration for the endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.authType"></a>

- *Type:* str

The authentication type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#auth_type LambdaWebFunctionEndpoint#auth_type}

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* str

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_name LambdaWebFunctionEndpoint#endpoint_name}

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

The type of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_type LambdaWebFunctionEndpoint#endpoint_type}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the web function this endpoint belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#function_name LambdaWebFunctionEndpoint#function_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.description"></a>

- *Type:* str

A description of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#description LambdaWebFunctionEndpoint#description}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

The list of AWS Regions for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#regions LambdaWebFunctionEndpoint#regions}

---

##### `revision_weights`<sup>Optional</sup> <a name="revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.revisionWeights"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]

List of revision routing entries.

1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_weights LambdaWebFunctionEndpoint#revision_weights}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

The scaling configuration for the endpoint.

Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#scaling_config LambdaWebFunctionEndpoint#scaling_config}

---

##### `throttle_config`<sup>Optional</sup> <a name="throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.throttleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

The throttling configuration for the endpoint.

Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#throttle_config LambdaWebFunctionEndpoint#throttle_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights">put_revision_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig">put_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig">put_throttle_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights">reset_revision_weights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig">reset_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig">reset_throttle_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_revision_weights` <a name="put_revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights"></a>

```python
def put_revision_weights(
  value: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]

---

##### `put_scaling_config` <a name="put_scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig"></a>

```python
def put_scaling_config(
  max_environments: typing.Union[int, float] = None
) -> None
```

###### `max_environments`<sup>Optional</sup> <a name="max_environments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig.parameter.maxEnvironments"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent execution environments for the endpoint.

This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#max_environments LambdaWebFunctionEndpoint#max_environments}

---

##### `put_throttle_config` <a name="put_throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig"></a>

```python
def put_throttle_config(
  rate_limit: typing.Union[int, float] = None
) -> None
```

###### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig.parameter.rateLimit"></a>

- *Type:* typing.Union[int, float]

The maximum request rate per second for the endpoint, up to a maximum of 10000.

This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#rate_limit LambdaWebFunctionEndpoint#rate_limit}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_revision_weights` <a name="reset_revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights"></a>

```python
def reset_revision_weights() -> None
```

##### `reset_scaling_config` <a name="reset_scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig"></a>

```python
def reset_scaling_config() -> None
```

##### `reset_throttle_config` <a name="reset_throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig"></a>

```python
def reset_throttle_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaWebFunctionEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaWebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints">regional_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights">revision_weights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason">update_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput">revision_weights_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput">scaling_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput">throttle_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `regional_endpoints`<sup>Required</sup> <a name="regional_endpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints"></a>

```python
regional_endpoints: LambdaWebFunctionEndpointRegionalEndpointsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a>

---

##### `revision_weights`<sup>Required</sup> <a name="revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights"></a>

```python
revision_weights: LambdaWebFunctionEndpointRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig"></a>

```python
scaling_config: LambdaWebFunctionEndpointScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `throttle_config`<sup>Required</sup> <a name="throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig"></a>

```python
throttle_config: LambdaWebFunctionEndpointThrottleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `update_status_reason`<sup>Required</sup> <a name="update_status_reason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason"></a>

```python
update_status_reason: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revision_weights_input`<sup>Optional</sup> <a name="revision_weights_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput"></a>

```python
revision_weights_input: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]

---

##### `scaling_config_input`<sup>Optional</sup> <a name="scaling_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput"></a>

```python
scaling_config_input: IResolvable | LambdaWebFunctionEndpointScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---

##### `throttle_config_input`<sup>Optional</sup> <a name="throttle_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput"></a>

```python
throttle_config_input: IResolvable | LambdaWebFunctionEndpointThrottleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionEndpointConfig <a name="LambdaWebFunctionEndpointConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  endpoint_name: str,
  endpoint_type: str,
  function_name: str,
  description: str = None,
  regions: typing.List[str] = None,
  revision_weights: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights] = None,
  scaling_config: LambdaWebFunctionEndpointScalingConfig = None,
  throttle_config: LambdaWebFunctionEndpointThrottleConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType">auth_type</a></code> | <code>str</code> | The authentication type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName">endpoint_name</a></code> | <code>str</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | The type of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the web function this endpoint belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description">description</a></code> | <code>str</code> | A description of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | The list of AWS Regions for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights">revision_weights</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]</code> | List of revision routing entries. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | The scaling configuration for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | The throttling configuration for the endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#auth_type LambdaWebFunctionEndpoint#auth_type}

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_name LambdaWebFunctionEndpoint#endpoint_name}

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

The type of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_type LambdaWebFunctionEndpoint#endpoint_type}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the web function this endpoint belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#function_name LambdaWebFunctionEndpoint#function_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#description LambdaWebFunctionEndpoint#description}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of AWS Regions for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#regions LambdaWebFunctionEndpoint#regions}

---

##### `revision_weights`<sup>Optional</sup> <a name="revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights"></a>

```python
revision_weights: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]

List of revision routing entries.

1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_weights LambdaWebFunctionEndpoint#revision_weights}

---

##### `scaling_config`<sup>Optional</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig"></a>

```python
scaling_config: LambdaWebFunctionEndpointScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

The scaling configuration for the endpoint.

Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#scaling_config LambdaWebFunctionEndpoint#scaling_config}

---

##### `throttle_config`<sup>Optional</sup> <a name="throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig"></a>

```python
throttle_config: LambdaWebFunctionEndpointThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

The throttling configuration for the endpoint.

Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#throttle_config LambdaWebFunctionEndpoint#throttle_config}

---

### LambdaWebFunctionEndpointRegionalEndpoints <a name="LambdaWebFunctionEndpointRegionalEndpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints()
```


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights()
```


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig()
```


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig()
```


### LambdaWebFunctionEndpointRevisionWeights <a name="LambdaWebFunctionEndpointRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights(
  revision_id: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId">revision_id</a></code> | <code>str</code> | The revision identifier. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The traffic weight for this revision. |

---

##### `revision_id`<sup>Optional</sup> <a name="revision_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

The revision identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_id LambdaWebFunctionEndpoint#revision_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The traffic weight for this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#weight LambdaWebFunctionEndpoint#weight}

---

### LambdaWebFunctionEndpointScalingConfig <a name="LambdaWebFunctionEndpointScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig(
  max_environments: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent execution environments for the endpoint. |

---

##### `max_environments`<sup>Optional</sup> <a name="max_environments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent execution environments for the endpoint.

This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#max_environments LambdaWebFunctionEndpoint#max_environments}

---

### LambdaWebFunctionEndpointThrottleConfig <a name="LambdaWebFunctionEndpointThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig(
  rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum request rate per second for the endpoint, up to a maximum of 10000. |

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum request rate per second for the endpoint, up to a maximum of 10000.

This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#rate_limit LambdaWebFunctionEndpoint#rate_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionEndpointRegionalEndpointsMap <a name="LambdaWebFunctionEndpointRegionalEndpointsMap" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get"></a>

```python
def get(
  key: str
) -> LambdaWebFunctionEndpointRegionalEndpointsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LambdaWebFunctionEndpointRegionalEndpointsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights">revision_weights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig">scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig">throttle_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus">update_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason">update_status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `revision_weights`<sup>Required</sup> <a name="revision_weights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights"></a>

```python
revision_weights: LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a>

---

##### `scaling_config`<sup>Required</sup> <a name="scaling_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig"></a>

```python
scaling_config: LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `throttle_config`<sup>Required</sup> <a name="throttle_config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig"></a>

```python
throttle_config: LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a>

---

##### `update_status`<sup>Required</sup> <a name="update_status" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus"></a>

```python
update_status: str
```

- *Type:* str

---

##### `update_status_reason`<sup>Required</sup> <a name="update_status_reason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason"></a>

```python
update_status_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: LambdaWebFunctionEndpointRegionalEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue"></a>

```python
internal_value: LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_environments`<sup>Required</sup> <a name="max_environments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaWebFunctionEndpointRegionalEndpointsScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a>

---


### LambdaWebFunctionEndpointRevisionWeightsList <a name="LambdaWebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaWebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaWebFunctionEndpointRevisionWeights]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>]

---


### LambdaWebFunctionEndpointRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId">reset_revision_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_revision_id` <a name="reset_revision_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId"></a>

```python
def reset_revision_id() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput">revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `revision_id_input`<sup>Optional</sup> <a name="revision_id_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput"></a>

```python
revision_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionEndpointRevisionWeights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights">LambdaWebFunctionEndpointRevisionWeights</a>

---


### LambdaWebFunctionEndpointScalingConfigOutputReference <a name="LambdaWebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments">reset_max_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_environments` <a name="reset_max_environments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments"></a>

```python
def reset_max_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">max_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">max_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_environments_input`<sup>Optional</sup> <a name="max_environments_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```python
max_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_environments`<sup>Required</sup> <a name="max_environments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```python
max_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionEndpointScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---


### LambdaWebFunctionEndpointThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_endpoint

lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit">reset_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionEndpointThrottleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---



