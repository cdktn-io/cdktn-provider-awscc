# `lambdaWebFunctionRevision` Submodule <a name="`lambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionRevision <a name="LambdaWebFunctionRevision" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevision(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  build_config: LambdaWebFunctionRevisionBuildConfig,
  function_name: str,
  service_config: LambdaWebFunctionRevisionServiceConfig,
  description: str = None,
  kms_key_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.buildConfig">build_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.serviceConfig">service_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.serviceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.description"></a>

- *Type:* str

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig">put_build_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig">put_service_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_build_config` <a name="put_build_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig"></a>

```python
def put_build_config(
  code_config: LambdaWebFunctionRevisionBuildConfigCodeConfig,
  runtime_config: LambdaWebFunctionRevisionBuildConfigRuntimeConfig
) -> None
```

###### `code_config`<sup>Required</sup> <a name="code_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig.parameter.codeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

The code configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config LambdaWebFunctionRevision#code_config}

---

###### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putBuildConfig.parameter.runtimeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

The runtime configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config LambdaWebFunctionRevision#runtime_config}

---

##### `put_service_config` <a name="put_service_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig"></a>

```python
def put_service_config(
  execution_role_arn: str,
  environment_variables: typing.Mapping[str] = None,
  max_concurrency_per_environment: typing.Union[int, float] = None,
  telemetry_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfig = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.executionRoleArn"></a>

- *Type:* str

The ARN of the execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn LambdaWebFunctionRevision#execution_role_arn}

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables LambdaWebFunctionRevision#environment_variables}

---

###### `max_concurrency_per_environment`<sup>Optional</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.maxConcurrencyPerEnvironment"></a>

- *Type:* typing.Union[int, float]

The maximum concurrency per environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment LambdaWebFunctionRevision#max_concurrency_per_environment}

---

###### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.telemetryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

The telemetry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config LambdaWebFunctionRevision#telemetry_config}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.putServiceConfig.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The function timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds LambdaWebFunctionRevision#timeout_seconds}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaWebFunctionRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig">build_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn">revision_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput">build_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput">service_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfig"></a>

```python
build_config: LambdaWebFunctionRevisionBuildConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference">LambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revision_arn`<sup>Required</sup> <a name="revision_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionArn"></a>

```python
revision_arn: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfig"></a>

```python
service_config: LambdaWebFunctionRevisionServiceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference">LambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `build_config_input`<sup>Optional</sup> <a name="build_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.buildConfigInput"></a>

```python
build_config_input: IResolvable | LambdaWebFunctionRevisionBuildConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `service_config_input`<sup>Optional</sup> <a name="service_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.serviceConfigInput"></a>

```python
service_config_input: IResolvable | LambdaWebFunctionRevisionServiceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionRevisionBuildConfig <a name="LambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig(
  code_config: LambdaWebFunctionRevisionBuildConfigCodeConfig,
  runtime_config: LambdaWebFunctionRevisionBuildConfigRuntimeConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig">code_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | The code configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | The runtime configuration for the revision. |

---

##### `code_config`<sup>Required</sup> <a name="code_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.codeConfig"></a>

```python
code_config: LambdaWebFunctionRevisionBuildConfigCodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

The code configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config LambdaWebFunctionRevision#code_config}

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig.property.runtimeConfig"></a>

```python
runtime_config: LambdaWebFunctionRevisionBuildConfigRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

The runtime configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config LambdaWebFunctionRevision#runtime_config}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfig <a name="LambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig(
  s3_object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object">s3_object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | The Amazon S3 location of the deployment artifact. |

---

##### `s3_object`<sup>Required</sup> <a name="s3_object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig.property.s3Object"></a>

```python
s3_object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

The Amazon S3 location of the deployment artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object LambdaWebFunctionRevision#s3_object}

---

### LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object(
  bucket: str,
  key: str,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket">bucket</a></code> | <code>str</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key">key</a></code> | <code>str</code> | The S3 object key. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId">version_id</a></code> | <code>str</code> | The S3 object version ID. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket LambdaWebFunctionRevision#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.key"></a>

```python
key: str
```

- *Type:* str

The S3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key LambdaWebFunctionRevision#key}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

The S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id LambdaWebFunctionRevision#version_id}

---

### LambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig(
  runtime: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime">runtime</a></code> | <code>str</code> | The runtime identifier. |

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

The runtime identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime LambdaWebFunctionRevision#runtime}

---

### LambdaWebFunctionRevisionConfig <a name="LambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  build_config: LambdaWebFunctionRevisionBuildConfig,
  function_name: str,
  service_config: LambdaWebFunctionRevisionServiceConfig,
  description: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig">build_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | The build configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the web function this revision belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | The service configuration for the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description">description</a></code> | <code>str</code> | A description of the revision. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt the revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.buildConfig"></a>

```python
build_config: LambdaWebFunctionRevisionBuildConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

The build configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config LambdaWebFunctionRevision#build_config}

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the web function this revision belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name LambdaWebFunctionRevision#function_name}

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.serviceConfig"></a>

```python
service_config: LambdaWebFunctionRevisionServiceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

The service configuration for the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config LambdaWebFunctionRevision#service_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description LambdaWebFunctionRevision#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key used to encrypt the revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn LambdaWebFunctionRevision#kms_key_arn}

---

### LambdaWebFunctionRevisionServiceConfig <a name="LambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig(
  execution_role_arn: str,
  environment_variables: typing.Mapping[str] = None,
  max_concurrency_per_environment: typing.Union[int, float] = None,
  telemetry_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfig = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The ARN of the execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment">max_concurrency_per_environment</a></code> | <code>typing.Union[int, float]</code> | The maximum concurrency per environment. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | The telemetry configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The function timeout in seconds. |

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

The ARN of the execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn LambdaWebFunctionRevision#execution_role_arn}

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables LambdaWebFunctionRevision#environment_variables}

---

##### `max_concurrency_per_environment`<sup>Optional</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.maxConcurrencyPerEnvironment"></a>

```python
max_concurrency_per_environment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum concurrency per environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment LambdaWebFunctionRevision#max_concurrency_per_environment}

---

##### `telemetry_config`<sup>Optional</sup> <a name="telemetry_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.telemetryConfig"></a>

```python
telemetry_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

The telemetry configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config LambdaWebFunctionRevision#telemetry_config}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The function timeout in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds LambdaWebFunctionRevision#timeout_seconds}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig(
  logging_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | The logging configuration for the web function. |

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig.property.loggingConfig"></a>

```python
logging_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

The logging configuration for the web function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config LambdaWebFunctionRevision#logging_config}

---

### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig(
  application_log_level: str = None,
  log_group: str = None,
  system_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | The application log level. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup">log_group</a></code> | <code>str</code> | The CloudWatch log group name. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | The system log level. |

---

##### `application_log_level`<sup>Optional</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

The application log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level LambdaWebFunctionRevision#application_log_level}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The CloudWatch log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group LambdaWebFunctionRevision#log_group}

---

##### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

The system log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level LambdaWebFunctionRevision#system_log_level}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object">put_s3_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_object` <a name="put_s3_object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object"></a>

```python
def put_s3_object(
  bucket: str,
  key: str,
  version_id: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.bucket"></a>

- *Type:* str

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket LambdaWebFunctionRevision#bucket}

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.key"></a>

- *Type:* str

The S3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key LambdaWebFunctionRevision#key}

---

###### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.putS3Object.parameter.versionId"></a>

- *Type:* str

The S3 object version ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id LambdaWebFunctionRevision#version_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3_object</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput">s3_object_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_object`<sup>Required</sup> <a name="s3_object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```python
s3_object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `s3_object_input`<sup>Optional</sup> <a name="s3_object_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3ObjectInput"></a>

```python
s3_object_input: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version_id` <a name="reset_version_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resetVersionId"></a>

```python
def reset_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### LambdaWebFunctionRevisionBuildConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig">put_code_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig">put_runtime_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_config` <a name="put_code_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig"></a>

```python
def put_code_config(
  s3_object: LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
) -> None
```

###### `s3_object`<sup>Required</sup> <a name="s3_object" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putCodeConfig.parameter.s3Object"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">LambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

The Amazon S3 location of the deployment artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object LambdaWebFunctionRevision#s3_object}

---

##### `put_runtime_config` <a name="put_runtime_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig"></a>

```python
def put_runtime_config(
  runtime: str
) -> None
```

###### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.putRuntimeConfig.parameter.runtime"></a>

- *Type:* str

The runtime identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime LambdaWebFunctionRevision#runtime}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">code_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput">code_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput">runtime_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_config`<sup>Required</sup> <a name="code_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```python
code_config: LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```python
runtime_config: LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `code_config_input`<sup>Optional</sup> <a name="code_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfigInput"></a>

```python
code_config_input: IResolvable | LambdaWebFunctionRevisionBuildConfigCodeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigCodeConfig">LambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---

##### `runtime_config_input`<sup>Optional</sup> <a name="runtime_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfigInput"></a>

```python
runtime_config_input: IResolvable | LambdaWebFunctionRevisionBuildConfigRuntimeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionBuildConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfig">LambdaWebFunctionRevisionBuildConfig</a>

---


### LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionBuildConfigRuntimeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionBuildConfigRuntimeConfig">LambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig">put_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment">reset_max_concurrency_per_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig">reset_telemetry_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_telemetry_config` <a name="put_telemetry_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig"></a>

```python
def put_telemetry_config(
  logging_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig = None
) -> None
```

###### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.putTelemetryConfig.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

The logging configuration for the web function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config LambdaWebFunctionRevision#logging_config}

---

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_max_concurrency_per_environment` <a name="reset_max_concurrency_per_environment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetMaxConcurrencyPerEnvironment"></a>

```python
def reset_max_concurrency_per_environment() -> None
```

##### `reset_telemetry_config` <a name="reset_telemetry_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTelemetryConfig"></a>

```python
def reset_telemetry_config() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput">max_concurrency_per_environment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput">telemetry_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">max_concurrency_per_environment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `telemetry_config`<sup>Required</sup> <a name="telemetry_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```python
telemetry_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `max_concurrency_per_environment_input`<sup>Optional</sup> <a name="max_concurrency_per_environment_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironmentInput"></a>

```python
max_concurrency_per_environment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetry_config_input`<sup>Optional</sup> <a name="telemetry_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfigInput"></a>

```python
telemetry_config_input: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `max_concurrency_per_environment`<sup>Required</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```python
max_concurrency_per_environment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionServiceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfig">LambdaWebFunctionRevisionServiceConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel">reset_application_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel">reset_system_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_log_level` <a name="reset_application_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```python
def reset_application_log_level() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_system_log_level` <a name="reset_system_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resetSystemLogLevel"></a>

```python
def reset_system_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput">application_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput">system_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_log_level_input`<sup>Optional</sup> <a name="application_log_level_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```python
application_log_level_input: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `system_log_level_input`<sup>Optional</sup> <a name="system_log_level_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```python
system_log_level_input: str
```

- *Type:* str

---

##### `application_log_level`<sup>Required</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_web_function_revision

lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig"></a>

```python
def put_logging_config(
  application_log_level: str = None,
  log_group: str = None,
  system_log_level: str = None
) -> None
```

###### `application_log_level`<sup>Optional</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.applicationLogLevel"></a>

- *Type:* str

The application log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level LambdaWebFunctionRevision#application_log_level}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.logGroup"></a>

- *Type:* str

The CloudWatch log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group LambdaWebFunctionRevision#log_group}

---

###### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.putLoggingConfig.parameter.systemLogLevel"></a>

- *Type:* str

The system log level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level LambdaWebFunctionRevision#system_log_level}

---

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaWebFunctionRevisionServiceConfigTelemetryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaWebFunctionRevision.LambdaWebFunctionRevisionServiceConfigTelemetryConfig">LambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



