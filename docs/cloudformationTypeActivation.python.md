# `cloudformationTypeActivation` Submodule <a name="`cloudformationTypeActivation` Submodule" id="@cdktn/provider-awscc.cloudformationTypeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationTypeActivation <a name="CloudformationTypeActivation" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation awscc_cloudformation_type_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_update: bool | IResolvable = None,
  execution_role_arn: str = None,
  logging_config: CloudformationTypeActivationLoggingConfig = None,
  major_version: str = None,
  public_type_arn: str = None,
  publisher_id: str = None,
  type: str = None,
  type_name: str = None,
  type_name_alias: str = None,
  version_bump: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.majorVersion">major_version</a></code> | <code>str</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publicTypeArn">public_type_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publisherId">publisher_id</a></code> | <code>str</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.type">type</a></code> | <code>str</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeNameAlias">type_name_alias</a></code> | <code>str</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.versionBump">version_bump</a></code> | <code>str</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.autoUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `major_version`<sup>Optional</sup> <a name="major_version" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.majorVersion"></a>

- *Type:* str

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `public_type_arn`<sup>Optional</sup> <a name="public_type_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publicTypeArn"></a>

- *Type:* str

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.publisherId"></a>

- *Type:* str

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.type"></a>

- *Type:* str

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeName"></a>

- *Type:* str

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `type_name_alias`<sup>Optional</sup> <a name="type_name_alias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.typeNameAlias"></a>

- *Type:* str

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `version_bump`<sup>Optional</sup> <a name="version_bump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.Initializer.parameter.versionBump"></a>

- *Type:* str

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate">reset_auto_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion">reset_major_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn">reset_public_type_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId">reset_publisher_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias">reset_type_name_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump">reset_version_bump</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig"></a>

```python
def put_logging_config(
  log_group_name: str = None,
  log_role_arn: str = None
) -> None
```

###### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.logGroupName"></a>

- *Type:* str

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

###### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.putLoggingConfig.parameter.logRoleArn"></a>

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

##### `reset_auto_update` <a name="reset_auto_update" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetAutoUpdate"></a>

```python
def reset_auto_update() -> None
```

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_major_version` <a name="reset_major_version" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetMajorVersion"></a>

```python
def reset_major_version() -> None
```

##### `reset_public_type_arn` <a name="reset_public_type_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublicTypeArn"></a>

```python
def reset_public_type_arn() -> None
```

##### `reset_publisher_id` <a name="reset_publisher_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetPublisherId"></a>

```python
def reset_publisher_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_name_alias` <a name="reset_type_name_alias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetTypeNameAlias"></a>

```python
def reset_type_name_alias() -> None
```

##### `reset_version_bump` <a name="reset_version_bump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.resetVersionBump"></a>

```python
def reset_version_bump() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationTypeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationTypeActivation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationTypeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationTypeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput">auto_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput">major_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput">public_type_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput">publisher_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput">type_name_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput">version_bump_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion">major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn">public_type_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId">publisher_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias">type_name_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump">version_bump</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfig"></a>

```python
logging_config: CloudformationTypeActivationLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference">CloudformationTypeActivationLoggingConfigOutputReference</a>

---

##### `auto_update_input`<sup>Optional</sup> <a name="auto_update_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdateInput"></a>

```python
auto_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | CloudformationTypeActivationLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---

##### `major_version_input`<sup>Optional</sup> <a name="major_version_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersionInput"></a>

```python
major_version_input: str
```

- *Type:* str

---

##### `public_type_arn_input`<sup>Optional</sup> <a name="public_type_arn_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArnInput"></a>

```python
public_type_arn_input: str
```

- *Type:* str

---

##### `publisher_id_input`<sup>Optional</sup> <a name="publisher_id_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherIdInput"></a>

```python
publisher_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_alias_input`<sup>Optional</sup> <a name="type_name_alias_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAliasInput"></a>

```python
type_name_alias_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `version_bump_input`<sup>Optional</sup> <a name="version_bump_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBumpInput"></a>

```python
version_bump_input: str
```

- *Type:* str

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.autoUpdate"></a>

```python
auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `major_version`<sup>Required</sup> <a name="major_version" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.majorVersion"></a>

```python
major_version: str
```

- *Type:* str

---

##### `public_type_arn`<sup>Required</sup> <a name="public_type_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publicTypeArn"></a>

```python
public_type_arn: str
```

- *Type:* str

---

##### `publisher_id`<sup>Required</sup> <a name="publisher_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_name_alias`<sup>Required</sup> <a name="type_name_alias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.typeNameAlias"></a>

```python
type_name_alias: str
```

- *Type:* str

---

##### `version_bump`<sup>Required</sup> <a name="version_bump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.versionBump"></a>

```python
version_bump: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeActivationConfig <a name="CloudformationTypeActivationConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_update: bool | IResolvable = None,
  execution_role_arn: str = None,
  logging_config: CloudformationTypeActivationLoggingConfig = None,
  major_version: str = None,
  public_type_arn: str = None,
  publisher_id: str = None,
  type: str = None,
  type_name: str = None,
  type_name_alias: str = None,
  version_bump: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate">auto_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | Specifies logging configuration information for a type. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion">major_version</a></code> | <code>str</code> | The Major Version of the type you want to enable. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn">public_type_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) assigned to the public extension upon publication. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId">publisher_id</a></code> | <code>str</code> | The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type">type</a></code> | <code>str</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName">type_name</a></code> | <code>str</code> | The name of the type being registered. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias">type_name_alias</a></code> | <code>str</code> | An alias to assign to the public extension in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump">version_bump</a></code> | <code>str</code> | Manually updates a previously-enabled type to a new major or minor version, if available. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_update`<sup>Optional</sup> <a name="auto_update" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.autoUpdate"></a>

```python
auto_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher.

Major versions released by the publisher must be manually updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#auto_update CloudformationTypeActivation#auto_update}

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM execution role to use to register the type.

If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#execution_role_arn CloudformationTypeActivation#execution_role_arn}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.loggingConfig"></a>

```python
logging_config: CloudformationTypeActivationLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

Specifies logging configuration information for a type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#logging_config CloudformationTypeActivation#logging_config}

---

##### `major_version`<sup>Optional</sup> <a name="major_version" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.majorVersion"></a>

```python
major_version: str
```

- *Type:* str

The Major Version of the type you want to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#major_version CloudformationTypeActivation#major_version}

---

##### `public_type_arn`<sup>Optional</sup> <a name="public_type_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publicTypeArn"></a>

```python
public_type_arn: str
```

- *Type:* str

The Amazon Resource Number (ARN) assigned to the public extension upon publication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#public_type_arn CloudformationTypeActivation#public_type_arn}

---

##### `publisher_id`<sup>Optional</sup> <a name="publisher_id" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.publisherId"></a>

```python
publisher_id: str
```

- *Type:* str

The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#publisher_id CloudformationTypeActivation#publisher_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type CloudformationTypeActivation#type}

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type_name CloudformationTypeActivation#type_name}

---

##### `type_name_alias`<sup>Optional</sup> <a name="type_name_alias" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.typeNameAlias"></a>

```python
type_name_alias: str
```

- *Type:* str

An alias to assign to the public extension in this account and region.

If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#type_name_alias CloudformationTypeActivation#type_name_alias}

---

##### `version_bump`<sup>Optional</sup> <a name="version_bump" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationConfig.property.versionBump"></a>

```python
version_bump: str
```

- *Type:* str

Manually updates a previously-enabled type to a new major or minor version, if available.

You can also use this parameter to update the value of AutoUpdateEnabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#version_bump CloudformationTypeActivation#version_bump}

---

### CloudformationTypeActivationLoggingConfig <a name="CloudformationTypeActivationLoggingConfig" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig(
  log_group_name: str = None,
  log_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs. |

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#log_group_name CloudformationTypeActivation#log_group_name}

---

##### `log_role_arn`<sup>Optional</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_type_activation#log_role_arn CloudformationTypeActivation#log_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeActivationLoggingConfigOutputReference <a name="CloudformationTypeActivationLoggingConfigOutputReference" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_type_activation

cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn">reset_log_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_log_role_arn` <a name="reset_log_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.resetLogRoleArn"></a>

```python
def reset_log_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput">log_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_role_arn_input`<sup>Optional</sup> <a name="log_role_arn_input" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArnInput"></a>

```python
log_role_arn_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationTypeActivationLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationTypeActivation.CloudformationTypeActivationLoggingConfig">CloudformationTypeActivationLoggingConfig</a>

---



