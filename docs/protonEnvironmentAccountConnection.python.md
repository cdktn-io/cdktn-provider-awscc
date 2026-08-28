# `protonEnvironmentAccountConnection` Submodule <a name="`protonEnvironmentAccountConnection` Submodule" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonEnvironmentAccountConnection <a name="ProtonEnvironmentAccountConnection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  codebuild_role_arn: str = None,
  component_role_arn: str = None,
  environment_account_id: str = None,
  environment_name: str = None,
  management_account_id: str = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.codebuildRoleArn">codebuild_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM service role in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.componentRoleArn">component_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.environmentAccountId">environment_account_id</a></code> | <code>str</code> | The environment account that's connected to the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.environmentName">environment_name</a></code> | <code>str</code> | The name of the AWS Proton environment that's created in the associated management account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.managementAccountId">management_account_id</a></code> | <code>str</code> | The ID of the management account that accepts or rejects the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]</code> | <p>An optional list of metadata items that you can associate with the Proton environment account connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `codebuild_role_arn`<sup>Optional</sup> <a name="codebuild_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.codebuildRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAM service role in the environment account.

AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#codebuild_role_arn ProtonEnvironmentAccountConnection#codebuild_role_arn}

---

##### `component_role_arn`<sup>Optional</sup> <a name="component_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.componentRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.

It determines the scope of infrastructure that a component can provision in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#component_role_arn ProtonEnvironmentAccountConnection#component_role_arn}

---

##### `environment_account_id`<sup>Optional</sup> <a name="environment_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.environmentAccountId"></a>

- *Type:* str

The environment account that's connected to the environment account connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_account_id ProtonEnvironmentAccountConnection#environment_account_id}

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.environmentName"></a>

- *Type:* str

The name of the AWS Proton environment that's created in the associated management account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_name ProtonEnvironmentAccountConnection#environment_name}

---

##### `management_account_id`<sup>Optional</sup> <a name="management_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.managementAccountId"></a>

- *Type:* str

The ID of the management account that accepts or rejects the environment account connection.

You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#management_account_id ProtonEnvironmentAccountConnection#management_account_id}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account.

AWS Proton uses this role to provision infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#role_arn ProtonEnvironmentAccountConnection#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]

<p>An optional list of metadata items that you can associate with the Proton environment account connection.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#tags ProtonEnvironmentAccountConnection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn">reset_codebuild_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn">reset_component_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId">reset_environment_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName">reset_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId">reset_management_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]

---

##### `reset_codebuild_role_arn` <a name="reset_codebuild_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn"></a>

```python
def reset_codebuild_role_arn() -> None
```

##### `reset_component_role_arn` <a name="reset_component_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn"></a>

```python
def reset_component_role_arn() -> None
```

##### `reset_environment_account_id` <a name="reset_environment_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId"></a>

```python
def reset_environment_account_id() -> None
```

##### `reset_environment_name` <a name="reset_environment_name" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName"></a>

```python
def reset_environment_name() -> None
```

##### `reset_management_account_id` <a name="reset_management_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId"></a>

```python
def reset_management_account_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProtonEnvironmentAccountConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProtonEnvironmentAccountConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ProtonEnvironmentAccountConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId">environment_account_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput">codebuild_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput">component_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput">environment_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput">environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput">management_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn">codebuild_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn">component_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId">environment_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName">environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId">management_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `environment_account_connection_id`<sup>Required</sup> <a name="environment_account_connection_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId"></a>

```python
environment_account_connection_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags"></a>

```python
tags: ProtonEnvironmentAccountConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a>

---

##### `codebuild_role_arn_input`<sup>Optional</sup> <a name="codebuild_role_arn_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput"></a>

```python
codebuild_role_arn_input: str
```

- *Type:* str

---

##### `component_role_arn_input`<sup>Optional</sup> <a name="component_role_arn_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput"></a>

```python
component_role_arn_input: str
```

- *Type:* str

---

##### `environment_account_id_input`<sup>Optional</sup> <a name="environment_account_id_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput"></a>

```python
environment_account_id_input: str
```

- *Type:* str

---

##### `environment_name_input`<sup>Optional</sup> <a name="environment_name_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput"></a>

```python
environment_name_input: str
```

- *Type:* str

---

##### `management_account_id_input`<sup>Optional</sup> <a name="management_account_id_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput"></a>

```python
management_account_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]

---

##### `codebuild_role_arn`<sup>Required</sup> <a name="codebuild_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn"></a>

```python
codebuild_role_arn: str
```

- *Type:* str

---

##### `component_role_arn`<sup>Required</sup> <a name="component_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn"></a>

```python
component_role_arn: str
```

- *Type:* str

---

##### `environment_account_id`<sup>Required</sup> <a name="environment_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId"></a>

```python
environment_account_id: str
```

- *Type:* str

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

---

##### `management_account_id`<sup>Required</sup> <a name="management_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId"></a>

```python
management_account_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonEnvironmentAccountConnectionConfig <a name="ProtonEnvironmentAccountConnectionConfig" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  codebuild_role_arn: str = None,
  component_role_arn: str = None,
  environment_account_id: str = None,
  environment_name: str = None,
  management_account_id: str = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn">codebuild_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAM service role in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn">component_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId">environment_account_id</a></code> | <code>str</code> | The environment account that's connected to the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName">environment_name</a></code> | <code>str</code> | The name of the AWS Proton environment that's created in the associated management account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId">management_account_id</a></code> | <code>str</code> | The ID of the management account that accepts or rejects the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]</code> | <p>An optional list of metadata items that you can associate with the Proton environment account connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `codebuild_role_arn`<sup>Optional</sup> <a name="codebuild_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn"></a>

```python
codebuild_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAM service role in the environment account.

AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#codebuild_role_arn ProtonEnvironmentAccountConnection#codebuild_role_arn}

---

##### `component_role_arn`<sup>Optional</sup> <a name="component_role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn"></a>

```python
component_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.

It determines the scope of infrastructure that a component can provision in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#component_role_arn ProtonEnvironmentAccountConnection#component_role_arn}

---

##### `environment_account_id`<sup>Optional</sup> <a name="environment_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId"></a>

```python
environment_account_id: str
```

- *Type:* str

The environment account that's connected to the environment account connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_account_id ProtonEnvironmentAccountConnection#environment_account_id}

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

The name of the AWS Proton environment that's created in the associated management account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#environment_name ProtonEnvironmentAccountConnection#environment_name}

---

##### `management_account_id`<sup>Optional</sup> <a name="management_account_id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId"></a>

```python
management_account_id: str
```

- *Type:* str

The ID of the management account that accepts or rejects the environment account connection.

You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#management_account_id ProtonEnvironmentAccountConnection#management_account_id}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account.

AWS Proton uses this role to provision infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#role_arn ProtonEnvironmentAccountConnection#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]

<p>An optional list of metadata items that you can associate with the Proton environment account connection.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#tags ProtonEnvironmentAccountConnection#tags}

---

### ProtonEnvironmentAccountConnectionTags <a name="ProtonEnvironmentAccountConnectionTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key">key</a></code> | <code>str</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value">value</a></code> | <code>str</code> | <p>The value of the resource tag.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#key ProtonEnvironmentAccountConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/proton_environment_account_connection#value ProtonEnvironmentAccountConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonEnvironmentAccountConnectionTagsList <a name="ProtonEnvironmentAccountConnectionTagsList" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProtonEnvironmentAccountConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ProtonEnvironmentAccountConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>]

---


### ProtonEnvironmentAccountConnectionTagsOutputReference <a name="ProtonEnvironmentAccountConnectionTagsOutputReference" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import proton_environment_account_connection

protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ProtonEnvironmentAccountConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>

---



