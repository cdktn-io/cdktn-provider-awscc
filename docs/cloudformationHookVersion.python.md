# `cloudformationHookVersion` Submodule <a name="`cloudformationHookVersion` Submodule" id="@cdktn/provider-awscc.cloudformationHookVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationHookVersion <a name="CloudformationHookVersion" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version awscc_cloudformation_hook_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  schema_handler_package: str,
  type_name: str,
  execution_role_arn: str = None,
  logging_config: CloudformationHookVersionLoggingConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a></code> | Specifies logging configuration information for a type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.schemaHandlerPackage"></a>

- *Type:* str

A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#schema_handler_package CloudformationHookVersion#schema_handler_package}

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.typeName"></a>

- *Type:* str

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#type_name CloudformationHookVersion#type_name}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#execution_role_arn CloudformationHookVersion#execution_role_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#logging_config CloudformationHookVersion#logging_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.putLoggingConfig"></a>

```python
def put_logging_config(
  log_group_name: str = None,
  log_role_arn: str = None
) -> None
```

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.putLoggingConfig.parameter.logGroupName"></a>

- *Type:* str

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#log_group_name CloudformationHookVersion#log_group_name}

---

###### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.putLoggingConfig.parameter.logRoleArn"></a>

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#log_role_arn CloudformationHookVersion#log_role_arn}

---

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationHookVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationHookVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationHookVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationHookVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationHookVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.isDefaultVersion">is_default_version</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference">CloudformationHookVersionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeArn">type_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.schemaHandlerPackageInput">schema_handler_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default_version`<sup>Required</sup> <a name="is_default_version" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.isDefaultVersion"></a>

```python
is_default_version: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.loggingConfig"></a>

```python
logging_config: CloudformationHookVersionLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference">CloudformationHookVersionLoggingConfigOutputReference</a>

---

##### `type_arn`<sup>Required</sup> <a name="type_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeArn"></a>

```python
type_arn: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | CloudformationHookVersionLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a>

---

##### `schema_handler_package_input`<sup>Optional</sup> <a name="schema_handler_package_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.schemaHandlerPackageInput"></a>

```python
schema_handler_package_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.schemaHandlerPackage"></a>

```python
schema_handler_package: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationHookVersionConfig <a name="CloudformationHookVersionConfig" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  schema_handler_package: str,
  type_name: str,
  execution_role_arn: str = None,
  logging_config: CloudformationHookVersionLoggingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.typeName">type_name</a></code> | <code>str</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a></code> | Specifies logging configuration information for a type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.schemaHandlerPackage"></a>

```python
schema_handler_package: str
```

- *Type:* str

A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#schema_handler_package CloudformationHookVersion#schema_handler_package}

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#type_name CloudformationHookVersion#type_name}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#execution_role_arn CloudformationHookVersion#execution_role_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionConfig.property.loggingConfig"></a>

```python
logging_config: CloudformationHookVersionLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#logging_config CloudformationHookVersion#logging_config}

---

### CloudformationHookVersionLoggingConfig <a name="CloudformationHookVersionLoggingConfig" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersionLoggingConfig(
  log_group_name: str = None,
  log_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#log_group_name CloudformationHookVersion#log_group_name}

---

##### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_hook_version#log_role_arn CloudformationHookVersion#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationHookVersionLoggingConfigOutputReference <a name="CloudformationHookVersionLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_hook_version

cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resetLogRoleArn">reset_log_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_log_role_arn` <a name="reset_log_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.resetLogRoleArn"></a>

```python
def reset_log_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logRoleArnInput">log_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_role_arn_input`<sup>Optional</sup> <a name="log_role_arn_input" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logRoleArnInput"></a>

```python
log_role_arn_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationHookVersionLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationHookVersion.CloudformationHookVersionLoggingConfig">CloudformationHookVersionLoggingConfig</a>

---



