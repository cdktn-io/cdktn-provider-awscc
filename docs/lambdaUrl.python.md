# `lambdaUrl` Submodule <a name="`lambdaUrl` Submodule" id="@cdktn/provider-awscc.lambdaUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaUrl <a name="LambdaUrl" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url awscc_lambda_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrl(
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
  target_function_arn: str,
  cors: LambdaUrlCors = None,
  invoke_mode: str = None,
  qualifier: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.targetFunctionArn">target_function_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the function associated with the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#cors LambdaUrl#cors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.invokeMode">invoke_mode</a></code> | <code>str</code> | The invocation mode for the function's URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.authType"></a>

- *Type:* str

Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#auth_type LambdaUrl#auth_type}

---

##### `target_function_arn`<sup>Required</sup> <a name="target_function_arn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.targetFunctionArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the function associated with the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#target_function_arn LambdaUrl#target_function_arn}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#cors LambdaUrl#cors}.

---

##### `invoke_mode`<sup>Optional</sup> <a name="invoke_mode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.invokeMode"></a>

- *Type:* str

The invocation mode for the function's URL.

Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#invoke_mode LambdaUrl#invoke_mode}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.qualifier"></a>

- *Type:* str

The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#qualifier LambdaUrl#qualifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode">reset_invoke_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier">reset_qualifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors` <a name="put_cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors"></a>

```python
def put_cors(
  allow_credentials: bool | IResolvable = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
) -> None
```

###### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.allowCredentials"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether credentials are included in the CORS request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_credentials LambdaUrl#allow_credentials}

---

###### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.allowHeaders"></a>

- *Type:* typing.List[str]

Represents a collection of allowed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_headers LambdaUrl#allow_headers}

---

###### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.allowMethods"></a>

- *Type:* typing.List[str]

Represents a collection of allowed HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_methods LambdaUrl#allow_methods}

---

###### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.allowOrigins"></a>

- *Type:* typing.List[str]

Represents a collection of allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_origins LambdaUrl#allow_origins}

---

###### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.exposeHeaders"></a>

- *Type:* typing.List[str]

Represents a collection of exposed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#expose_headers LambdaUrl#expose_headers}

---

###### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}.

---

##### `reset_cors` <a name="reset_cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_invoke_mode` <a name="reset_invoke_mode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode"></a>

```python
def reset_invoke_mode() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaUrl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl">function_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput">cors_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput">invoke_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput">target_function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode">invoke_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn">target_function_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors"></a>

```python
cors: LambdaUrlCorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a>

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_url`<sup>Required</sup> <a name="function_url" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl"></a>

```python
function_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput"></a>

```python
cors_input: IResolvable | LambdaUrlCors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---

##### `invoke_mode_input`<sup>Optional</sup> <a name="invoke_mode_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput"></a>

```python
invoke_mode_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `target_function_arn_input`<sup>Optional</sup> <a name="target_function_arn_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput"></a>

```python
target_function_arn_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `invoke_mode`<sup>Required</sup> <a name="invoke_mode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode"></a>

```python
invoke_mode: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `target_function_arn`<sup>Required</sup> <a name="target_function_arn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn"></a>

```python
target_function_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaUrlConfig <a name="LambdaUrlConfig" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  target_function_arn: str,
  cors: LambdaUrlCors = None,
  invoke_mode: str = None,
  qualifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType">auth_type</a></code> | <code>str</code> | Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn">target_function_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the function associated with the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#cors LambdaUrl#cors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode">invoke_mode</a></code> | <code>str</code> | The invocation mode for the function's URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier">qualifier</a></code> | <code>str</code> | The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#auth_type LambdaUrl#auth_type}

---

##### `target_function_arn`<sup>Required</sup> <a name="target_function_arn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn"></a>

```python
target_function_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the function associated with the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#target_function_arn LambdaUrl#target_function_arn}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors"></a>

```python
cors: LambdaUrlCors
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#cors LambdaUrl#cors}.

---

##### `invoke_mode`<sup>Optional</sup> <a name="invoke_mode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode"></a>

```python
invoke_mode: str
```

- *Type:* str

The invocation mode for the function's URL.

Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#invoke_mode LambdaUrl#invoke_mode}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#qualifier LambdaUrl#qualifier}

---

### LambdaUrlCors <a name="LambdaUrlCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrlCors(
  allow_credentials: bool | IResolvable = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials">allow_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether credentials are included in the CORS request. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | Represents a collection of allowed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | Represents a collection of allowed HTTP methods. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | Represents a collection of allowed origins. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Represents a collection of exposed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}. |

---

##### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials"></a>

```python
allow_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether credentials are included in the CORS request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_credentials LambdaUrl#allow_credentials}

---

##### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

Represents a collection of allowed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_headers LambdaUrl#allow_headers}

---

##### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

Represents a collection of allowed HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_methods LambdaUrl#allow_methods}

---

##### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

Represents a collection of allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#allow_origins LambdaUrl#allow_origins}

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Represents a collection of exposed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#expose_headers LambdaUrl#expose_headers}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaUrlCorsOutputReference <a name="LambdaUrlCorsOutputReference" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_url

lambdaUrl.LambdaUrlCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials">reset_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders">reset_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods">reset_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins">reset_allow_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_credentials` <a name="reset_allow_credentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials"></a>

```python
def reset_allow_credentials() -> None
```

##### `reset_allow_headers` <a name="reset_allow_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders"></a>

```python
def reset_allow_headers() -> None
```

##### `reset_allow_methods` <a name="reset_allow_methods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods"></a>

```python
def reset_allow_methods() -> None
```

##### `reset_allow_origins` <a name="reset_allow_origins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins"></a>

```python
def reset_allow_origins() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput">allow_credentials_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput">allow_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput">allow_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput">allow_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials_input`<sup>Optional</sup> <a name="allow_credentials_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput"></a>

```python
allow_credentials_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_headers_input`<sup>Optional</sup> <a name="allow_headers_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput"></a>

```python
allow_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods_input`<sup>Optional</sup> <a name="allow_methods_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput"></a>

```python
allow_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins_input`<sup>Optional</sup> <a name="allow_origins_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput"></a>

```python
allow_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials"></a>

```python
allow_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaUrlCors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---



