# `cognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`cognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolRegionalConfigurationAttachment <a name="CognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_pool_id: str,
  email_configuration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration = None,
  lambda_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig = None,
  sms_configuration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration = None,
  status: str = None,
  user_pool_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolTags">user_pool_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `email_configuration`<sup>Optional</sup> <a name="email_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.emailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `sms_configuration`<sup>Optional</sup> <a name="sms_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.smsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.status"></a>

- *Type:* str

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `user_pool_tags`<sup>Optional</sup> <a name="user_pool_tags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.userPoolTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration">put_email_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration">put_sms_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration">reset_email_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration">reset_sms_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags">reset_user_pool_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email_configuration` <a name="put_email_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration"></a>

```python
def put_email_configuration(
  configuration_set: str = None,
  email_sending_account: str = None,
  from: str = None,
  reply_to_email_address: str = None,
  source_arn: str = None
) -> None
```

###### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.configurationSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

###### `email_sending_account`<sup>Optional</sup> <a name="email_sending_account" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.emailSendingAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

###### `reply_to_email_address`<sup>Optional</sup> <a name="reply_to_email_address" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.replyToEmailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

###### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putEmailConfiguration.parameter.sourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig"></a>

```python
def put_lambda_config(
  create_auth_challenge: str = None,
  custom_email_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender = None,
  custom_message: str = None,
  custom_sms_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender = None,
  define_auth_challenge: str = None,
  inbound_federation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation = None,
  kms_key_id: str = None,
  post_authentication: str = None,
  post_confirmation: str = None,
  pre_authentication: str = None,
  pre_sign_up: str = None,
  pre_token_generation: str = None,
  pre_token_generation_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig = None,
  user_migration: str = None,
  verify_auth_challenge_response: str = None
) -> None
```

###### `create_auth_challenge`<sup>Optional</sup> <a name="create_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.createAuthChallenge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

###### `custom_email_sender`<sup>Optional</sup> <a name="custom_email_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.customEmailSender"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

###### `custom_message`<sup>Optional</sup> <a name="custom_message" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.customMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

###### `custom_sms_sender`<sup>Optional</sup> <a name="custom_sms_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.customSmsSender"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

###### `define_auth_challenge`<sup>Optional</sup> <a name="define_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.defineAuthChallenge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

###### `inbound_federation`<sup>Optional</sup> <a name="inbound_federation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.inboundFederation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

###### `post_authentication`<sup>Optional</sup> <a name="post_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.postAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

###### `post_confirmation`<sup>Optional</sup> <a name="post_confirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.postConfirmation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

###### `pre_authentication`<sup>Optional</sup> <a name="pre_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.preAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

###### `pre_sign_up`<sup>Optional</sup> <a name="pre_sign_up" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.preSignUp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

###### `pre_token_generation`<sup>Optional</sup> <a name="pre_token_generation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.preTokenGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

###### `pre_token_generation_config`<sup>Optional</sup> <a name="pre_token_generation_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.preTokenGenerationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

###### `user_migration`<sup>Optional</sup> <a name="user_migration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.userMigration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

###### `verify_auth_challenge_response`<sup>Optional</sup> <a name="verify_auth_challenge_response" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putLambdaConfig.parameter.verifyAuthChallengeResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

##### `put_sms_configuration` <a name="put_sms_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration"></a>

```python
def put_sms_configuration(
  eums_sms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms = None,
  external_id: str = None,
  sns_caller_arn: str = None,
  sns_region: str = None
) -> None
```

###### `eums_sms`<sup>Optional</sup> <a name="eums_sms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.eumsSms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

###### `sns_caller_arn`<sup>Optional</sup> <a name="sns_caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.snsCallerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

###### `sns_region`<sup>Optional</sup> <a name="sns_region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.putSmsConfiguration.parameter.snsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

##### `reset_email_configuration` <a name="reset_email_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetEmailConfiguration"></a>

```python
def reset_email_configuration() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```

##### `reset_sms_configuration` <a name="reset_sms_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetSmsConfiguration"></a>

```python
def reset_sms_configuration() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_user_pool_tags` <a name="reset_user_pool_tags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.resetUserPoolTags"></a>

```python
def reset_user_pool_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput">email_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput">lambda_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput">sms_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput">user_pool_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">user_pool_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email_configuration`<sup>Required</sup> <a name="email_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```python
email_configuration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```python
lambda_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `sms_configuration`<sup>Required</sup> <a name="sms_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```python
sms_configuration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `email_configuration_input`<sup>Optional</sup> <a name="email_configuration_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.emailConfigurationInput"></a>

```python
email_configuration_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfigInput"></a>

```python
lambda_config_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---

##### `sms_configuration_input`<sup>Optional</sup> <a name="sms_configuration_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.smsConfigurationInput"></a>

```python
sms_configuration_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `user_pool_tags_input`<sup>Optional</sup> <a name="user_pool_tags_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTagsInput"></a>

```python
user_pool_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `user_pool_tags`<sup>Required</sup> <a name="user_pool_tags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```python
user_pool_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolRegionalConfigurationAttachmentConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_pool_id: str,
  email_configuration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration = None,
  lambda_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig = None,
  sms_configuration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration = None,
  status: str = None,
  user_pool_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status">status</a></code> | <code>str</code> | The status of the replica. Set to ACTIVE or INACTIVE. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags">user_pool_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_id CognitoUserPoolRegionalConfigurationAttachment#user_pool_id}.

---

##### `email_configuration`<sup>Optional</sup> <a name="email_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.emailConfiguration"></a>

```python
email_configuration: CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_configuration CognitoUserPoolRegionalConfigurationAttachment#email_configuration}.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.lambdaConfig"></a>

```python
lambda_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_config CognitoUserPoolRegionalConfigurationAttachment#lambda_config}.

---

##### `sms_configuration`<sup>Optional</sup> <a name="sms_configuration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.smsConfiguration"></a>

```python
sms_configuration: CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sms_configuration CognitoUserPoolRegionalConfigurationAttachment#sms_configuration}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the replica. Set to ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#status CognitoUserPoolRegionalConfigurationAttachment#status}

---

##### `user_pool_tags`<sup>Optional</sup> <a name="user_pool_tags" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentConfig.property.userPoolTags"></a>

```python
user_pool_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_pool_tags CognitoUserPoolRegionalConfigurationAttachment#user_pool_tags}.

---

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration(
  configuration_set: str = None,
  email_sending_account: str = None,
  from: str = None,
  reply_to_email_address: str = None,
  source_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet">configuration_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount">email_sending_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress">reply_to_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}. |

---

##### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set CognitoUserPoolRegionalConfigurationAttachment#configuration_set}.

---

##### `email_sending_account`<sup>Optional</sup> <a name="email_sending_account" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.emailSendingAccount"></a>

```python
email_sending_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#email_sending_account CognitoUserPoolRegionalConfigurationAttachment#email_sending_account}.

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#from CognitoUserPoolRegionalConfigurationAttachment#from}.

---

##### `reply_to_email_address`<sup>Optional</sup> <a name="reply_to_email_address" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.replyToEmailAddress"></a>

```python
reply_to_email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#reply_to_email_address CognitoUserPoolRegionalConfigurationAttachment#reply_to_email_address}.

---

##### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#source_arn CognitoUserPoolRegionalConfigurationAttachment#source_arn}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig(
  create_auth_challenge: str = None,
  custom_email_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender = None,
  custom_message: str = None,
  custom_sms_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender = None,
  define_auth_challenge: str = None,
  inbound_federation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation = None,
  kms_key_id: str = None,
  post_authentication: str = None,
  post_confirmation: str = None,
  pre_authentication: str = None,
  pre_sign_up: str = None,
  pre_token_generation: str = None,
  pre_token_generation_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig = None,
  user_migration: str = None,
  verify_auth_challenge_response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge">create_auth_challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender">custom_email_sender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage">custom_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender">custom_sms_sender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge">define_auth_challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation">inbound_federation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication">post_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation">post_confirmation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication">pre_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp">pre_sign_up</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration">pre_token_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig">pre_token_generation_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration">user_migration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse">verify_auth_challenge_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}. |

---

##### `create_auth_challenge`<sup>Optional</sup> <a name="create_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.createAuthChallenge"></a>

```python
create_auth_challenge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#create_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#create_auth_challenge}.

---

##### `custom_email_sender`<sup>Optional</sup> <a name="custom_email_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customEmailSender"></a>

```python
custom_email_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_email_sender CognitoUserPoolRegionalConfigurationAttachment#custom_email_sender}.

---

##### `custom_message`<sup>Optional</sup> <a name="custom_message" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customMessage"></a>

```python
custom_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_message CognitoUserPoolRegionalConfigurationAttachment#custom_message}.

---

##### `custom_sms_sender`<sup>Optional</sup> <a name="custom_sms_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.customSmsSender"></a>

```python
custom_sms_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#custom_sms_sender CognitoUserPoolRegionalConfigurationAttachment#custom_sms_sender}.

---

##### `define_auth_challenge`<sup>Optional</sup> <a name="define_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.defineAuthChallenge"></a>

```python
define_auth_challenge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#define_auth_challenge CognitoUserPoolRegionalConfigurationAttachment#define_auth_challenge}.

---

##### `inbound_federation`<sup>Optional</sup> <a name="inbound_federation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.inboundFederation"></a>

```python
inbound_federation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#inbound_federation CognitoUserPoolRegionalConfigurationAttachment#inbound_federation}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#kms_key_id CognitoUserPoolRegionalConfigurationAttachment#kms_key_id}.

---

##### `post_authentication`<sup>Optional</sup> <a name="post_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postAuthentication"></a>

```python
post_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_authentication CognitoUserPoolRegionalConfigurationAttachment#post_authentication}.

---

##### `post_confirmation`<sup>Optional</sup> <a name="post_confirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.postConfirmation"></a>

```python
post_confirmation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#post_confirmation CognitoUserPoolRegionalConfigurationAttachment#post_confirmation}.

---

##### `pre_authentication`<sup>Optional</sup> <a name="pre_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preAuthentication"></a>

```python
pre_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_authentication CognitoUserPoolRegionalConfigurationAttachment#pre_authentication}.

---

##### `pre_sign_up`<sup>Optional</sup> <a name="pre_sign_up" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preSignUp"></a>

```python
pre_sign_up: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_sign_up CognitoUserPoolRegionalConfigurationAttachment#pre_sign_up}.

---

##### `pre_token_generation`<sup>Optional</sup> <a name="pre_token_generation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGeneration"></a>

```python
pre_token_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation}.

---

##### `pre_token_generation_config`<sup>Optional</sup> <a name="pre_token_generation_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.preTokenGenerationConfig"></a>

```python
pre_token_generation_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#pre_token_generation_config CognitoUserPoolRegionalConfigurationAttachment#pre_token_generation_config}.

---

##### `user_migration`<sup>Optional</sup> <a name="user_migration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.userMigration"></a>

```python
user_migration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#user_migration CognitoUserPoolRegionalConfigurationAttachment#user_migration}.

---

##### `verify_auth_challenge_response`<sup>Optional</sup> <a name="verify_auth_challenge_response" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.property.verifyAuthChallengeResponse"></a>

```python
verify_auth_challenge_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#verify_auth_challenge_response CognitoUserPoolRegionalConfigurationAttachment#verify_auth_challenge_response}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender(
  lambda_arn: str = None,
  lambda_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender(
  lambda_arn: str = None,
  lambda_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation(
  lambda_arn: str = None,
  lambda_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig(
  lambda_arn: str = None,
  lambda_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}. |

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

##### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration(
  eums_sms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms = None,
  external_id: str = None,
  sns_caller_arn: str = None,
  sns_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms">eums_sms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn">sns_caller_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion">sns_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}. |

---

##### `eums_sms`<sup>Optional</sup> <a name="eums_sms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.eumsSms"></a>

```python
eums_sms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#eums_sms CognitoUserPoolRegionalConfigurationAttachment#eums_sms}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `sns_caller_arn`<sup>Optional</sup> <a name="sns_caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsCallerArn"></a>

```python
sns_caller_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_caller_arn CognitoUserPoolRegionalConfigurationAttachment#sns_caller_arn}.

---

##### `sns_region`<sup>Optional</sup> <a name="sns_region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.property.snsRegion"></a>

```python
sns_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#sns_region CognitoUserPoolRegionalConfigurationAttachment#sns_region}.

---

### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms(
  caller_arn: str = None,
  configuration_set_name: str = None,
  external_id: str = None,
  in_entity_id: str = None,
  in_template_id: str = None,
  origination_identity: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn">caller_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId">in_entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId">in_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity">origination_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}. |

---

##### `caller_arn`<sup>Optional</sup> <a name="caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.callerArn"></a>

```python
caller_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

##### `in_entity_id`<sup>Optional</sup> <a name="in_entity_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inEntityId"></a>

```python
in_entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

##### `in_template_id`<sup>Optional</sup> <a name="in_template_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.inTemplateId"></a>

```python
in_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

##### `origination_identity`<sup>Optional</sup> <a name="origination_identity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.originationIdentity"></a>

```python
origination_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet">reset_configuration_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount">reset_email_sending_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress">reset_reply_to_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn">reset_source_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_set` <a name="reset_configuration_set" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetConfigurationSet"></a>

```python
def reset_configuration_set() -> None
```

##### `reset_email_sending_account` <a name="reset_email_sending_account" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```python
def reset_email_sending_account() -> None
```

##### `reset_from` <a name="reset_from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_reply_to_email_address` <a name="reset_reply_to_email_address" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```python
def reset_reply_to_email_address() -> None
```

##### `reset_source_arn` <a name="reset_source_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resetSourceArn"></a>

```python
def reset_source_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput">configuration_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput">email_sending_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput">reply_to_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">configuration_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">email_sending_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">reply_to_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_set_input`<sup>Optional</sup> <a name="configuration_set_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSetInput"></a>

```python
configuration_set_input: str
```

- *Type:* str

---

##### `email_sending_account_input`<sup>Optional</sup> <a name="email_sending_account_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```python
email_sending_account_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `reply_to_email_address_input`<sup>Optional</sup> <a name="reply_to_email_address_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```python
reply_to_email_address_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `configuration_set`<sup>Required</sup> <a name="configuration_set" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

---

##### `email_sending_account`<sup>Required</sup> <a name="email_sending_account" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```python
email_sending_account: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `reply_to_email_address`<sup>Required</sup> <a name="reply_to_email_address" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```python
reply_to_email_address: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">CognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion">reset_lambda_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_lambda_version` <a name="reset_lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resetLambdaVersion"></a>

```python
def reset_lambda_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion">reset_lambda_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_lambda_version` <a name="reset_lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resetLambdaVersion"></a>

```python
def reset_lambda_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion">reset_lambda_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_lambda_version` <a name="reset_lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resetLambdaVersion"></a>

```python
def reset_lambda_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender">put_custom_email_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender">put_custom_sms_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation">put_inbound_federation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig">put_pre_token_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge">reset_create_auth_challenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender">reset_custom_email_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage">reset_custom_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender">reset_custom_sms_sender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge">reset_define_auth_challenge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation">reset_inbound_federation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication">reset_post_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation">reset_post_confirmation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication">reset_pre_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp">reset_pre_sign_up</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration">reset_pre_token_generation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig">reset_pre_token_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration">reset_user_migration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">reset_verify_auth_challenge_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_email_sender` <a name="put_custom_email_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender"></a>

```python
def put_custom_email_sender(
  lambda_arn: str = None,
  lambda_version: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

###### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomEmailSender.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

##### `put_custom_sms_sender` <a name="put_custom_sms_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender"></a>

```python
def put_custom_sms_sender(
  lambda_arn: str = None,
  lambda_version: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

###### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putCustomSmsSender.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

##### `put_inbound_federation` <a name="put_inbound_federation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation"></a>

```python
def put_inbound_federation(
  lambda_arn: str = None,
  lambda_version: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

###### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putInboundFederation.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

##### `put_pre_token_generation_config` <a name="put_pre_token_generation_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig"></a>

```python
def put_pre_token_generation_config(
  lambda_arn: str = None,
  lambda_version: str = None
) -> None
```

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_arn CognitoUserPoolRegionalConfigurationAttachment#lambda_arn}.

---

###### `lambda_version`<sup>Optional</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.putPreTokenGenerationConfig.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#lambda_version CognitoUserPoolRegionalConfigurationAttachment#lambda_version}.

---

##### `reset_create_auth_challenge` <a name="reset_create_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```python
def reset_create_auth_challenge() -> None
```

##### `reset_custom_email_sender` <a name="reset_custom_email_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomEmailSender"></a>

```python
def reset_custom_email_sender() -> None
```

##### `reset_custom_message` <a name="reset_custom_message" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomMessage"></a>

```python
def reset_custom_message() -> None
```

##### `reset_custom_sms_sender` <a name="reset_custom_sms_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetCustomSmsSender"></a>

```python
def reset_custom_sms_sender() -> None
```

##### `reset_define_auth_challenge` <a name="reset_define_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```python
def reset_define_auth_challenge() -> None
```

##### `reset_inbound_federation` <a name="reset_inbound_federation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetInboundFederation"></a>

```python
def reset_inbound_federation() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_post_authentication` <a name="reset_post_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostAuthentication"></a>

```python
def reset_post_authentication() -> None
```

##### `reset_post_confirmation` <a name="reset_post_confirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPostConfirmation"></a>

```python
def reset_post_confirmation() -> None
```

##### `reset_pre_authentication` <a name="reset_pre_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreAuthentication"></a>

```python
def reset_pre_authentication() -> None
```

##### `reset_pre_sign_up` <a name="reset_pre_sign_up" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreSignUp"></a>

```python
def reset_pre_sign_up() -> None
```

##### `reset_pre_token_generation` <a name="reset_pre_token_generation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```python
def reset_pre_token_generation() -> None
```

##### `reset_pre_token_generation_config` <a name="reset_pre_token_generation_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetPreTokenGenerationConfig"></a>

```python
def reset_pre_token_generation_config() -> None
```

##### `reset_user_migration` <a name="reset_user_migration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetUserMigration"></a>

```python
def reset_user_migration() -> None
```

##### `reset_verify_auth_challenge_response` <a name="reset_verify_auth_challenge_response" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```python
def reset_verify_auth_challenge_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">custom_email_sender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">custom_sms_sender</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">inbound_federation</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">pre_token_generation_config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput">create_auth_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput">custom_email_sender_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput">custom_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput">custom_sms_sender_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput">define_auth_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput">inbound_federation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput">post_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput">post_confirmation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput">pre_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput">pre_sign_up_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput">pre_token_generation_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput">pre_token_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput">user_migration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verify_auth_challenge_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">create_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">custom_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">define_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">post_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">post_confirmation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">pre_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">pre_sign_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">pre_token_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">user_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verify_auth_challenge_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_email_sender`<sup>Required</sup> <a name="custom_email_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```python
custom_email_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `custom_sms_sender`<sup>Required</sup> <a name="custom_sms_sender" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```python
custom_sms_sender: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `inbound_federation`<sup>Required</sup> <a name="inbound_federation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```python
inbound_federation: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `pre_token_generation_config`<sup>Required</sup> <a name="pre_token_generation_config" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```python
pre_token_generation_config: CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `create_auth_challenge_input`<sup>Optional</sup> <a name="create_auth_challenge_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```python
create_auth_challenge_input: str
```

- *Type:* str

---

##### `custom_email_sender_input`<sup>Optional</sup> <a name="custom_email_sender_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```python
custom_email_sender_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---

##### `custom_message_input`<sup>Optional</sup> <a name="custom_message_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessageInput"></a>

```python
custom_message_input: str
```

- *Type:* str

---

##### `custom_sms_sender_input`<sup>Optional</sup> <a name="custom_sms_sender_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```python
custom_sms_sender_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---

##### `define_auth_challenge_input`<sup>Optional</sup> <a name="define_auth_challenge_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```python
define_auth_challenge_input: str
```

- *Type:* str

---

##### `inbound_federation_input`<sup>Optional</sup> <a name="inbound_federation_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederationInput"></a>

```python
inbound_federation_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `post_authentication_input`<sup>Optional</sup> <a name="post_authentication_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```python
post_authentication_input: str
```

- *Type:* str

---

##### `post_confirmation_input`<sup>Optional</sup> <a name="post_confirmation_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmationInput"></a>

```python
post_confirmation_input: str
```

- *Type:* str

---

##### `pre_authentication_input`<sup>Optional</sup> <a name="pre_authentication_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```python
pre_authentication_input: str
```

- *Type:* str

---

##### `pre_sign_up_input`<sup>Optional</sup> <a name="pre_sign_up_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUpInput"></a>

```python
pre_sign_up_input: str
```

- *Type:* str

---

##### `pre_token_generation_config_input`<sup>Optional</sup> <a name="pre_token_generation_config_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfigInput"></a>

```python
pre_token_generation_config_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---

##### `pre_token_generation_input`<sup>Optional</sup> <a name="pre_token_generation_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```python
pre_token_generation_input: str
```

- *Type:* str

---

##### `user_migration_input`<sup>Optional</sup> <a name="user_migration_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigrationInput"></a>

```python
user_migration_input: str
```

- *Type:* str

---

##### `verify_auth_challenge_response_input`<sup>Optional</sup> <a name="verify_auth_challenge_response_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```python
verify_auth_challenge_response_input: str
```

- *Type:* str

---

##### `create_auth_challenge`<sup>Required</sup> <a name="create_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```python
create_auth_challenge: str
```

- *Type:* str

---

##### `custom_message`<sup>Required</sup> <a name="custom_message" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```python
custom_message: str
```

- *Type:* str

---

##### `define_auth_challenge`<sup>Required</sup> <a name="define_auth_challenge" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```python
define_auth_challenge: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `post_authentication`<sup>Required</sup> <a name="post_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```python
post_authentication: str
```

- *Type:* str

---

##### `post_confirmation`<sup>Required</sup> <a name="post_confirmation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```python
post_confirmation: str
```

- *Type:* str

---

##### `pre_authentication`<sup>Required</sup> <a name="pre_authentication" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```python
pre_authentication: str
```

- *Type:* str

---

##### `pre_sign_up`<sup>Required</sup> <a name="pre_sign_up" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```python
pre_sign_up: str
```

- *Type:* str

---

##### `pre_token_generation`<sup>Required</sup> <a name="pre_token_generation" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```python
pre_token_generation: str
```

- *Type:* str

---

##### `user_migration`<sup>Required</sup> <a name="user_migration" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```python
user_migration: str
```

- *Type:* str

---

##### `verify_auth_challenge_response`<sup>Required</sup> <a name="verify_auth_challenge_response" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```python
verify_auth_challenge_response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion">reset_lambda_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_lambda_version` <a name="reset_lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resetLambdaVersion"></a>

```python
def reset_lambda_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">CognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn">reset_caller_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName">reset_configuration_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId">reset_in_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId">reset_in_template_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity">reset_origination_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caller_arn` <a name="reset_caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetCallerArn"></a>

```python
def reset_caller_arn() -> None
```

##### `reset_configuration_set_name` <a name="reset_configuration_set_name" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetConfigurationSetName"></a>

```python
def reset_configuration_set_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_in_entity_id` <a name="reset_in_entity_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInEntityId"></a>

```python
def reset_in_entity_id() -> None
```

##### `reset_in_template_id` <a name="reset_in_template_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetInTemplateId"></a>

```python
def reset_in_template_id() -> None
```

##### `reset_origination_identity` <a name="reset_origination_identity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetOriginationIdentity"></a>

```python
def reset_origination_identity() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput">caller_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput">in_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput">in_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput">origination_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">in_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">in_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">origination_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caller_arn_input`<sup>Optional</sup> <a name="caller_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArnInput"></a>

```python
caller_arn_input: str
```

- *Type:* str

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `in_entity_id_input`<sup>Optional</sup> <a name="in_entity_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityIdInput"></a>

```python
in_entity_id_input: str
```

- *Type:* str

---

##### `in_template_id_input`<sup>Optional</sup> <a name="in_template_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateIdInput"></a>

```python
in_template_id_input: str
```

- *Type:* str

---

##### `origination_identity_input`<sup>Optional</sup> <a name="origination_identity_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentityInput"></a>

```python
origination_identity_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `caller_arn`<sup>Required</sup> <a name="caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```python
caller_arn: str
```

- *Type:* str

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `in_entity_id`<sup>Required</sup> <a name="in_entity_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```python
in_entity_id: str
```

- *Type:* str

---

##### `in_template_id`<sup>Required</sup> <a name="in_template_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```python
in_template_id: str
```

- *Type:* str

---

##### `origination_identity`<sup>Required</sup> <a name="origination_identity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```python
origination_identity: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cognito_user_pool_regional_configuration_attachment

cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms">put_eums_sms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms">reset_eums_sms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn">reset_sns_caller_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion">reset_sns_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eums_sms` <a name="put_eums_sms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms"></a>

```python
def put_eums_sms(
  caller_arn: str = None,
  configuration_set_name: str = None,
  external_id: str = None,
  in_entity_id: str = None,
  in_template_id: str = None,
  origination_identity: str = None,
  region: str = None
) -> None
```

###### `caller_arn`<sup>Optional</sup> <a name="caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.callerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#caller_arn CognitoUserPoolRegionalConfigurationAttachment#caller_arn}.

---

###### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#configuration_set_name CognitoUserPoolRegionalConfigurationAttachment#configuration_set_name}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#external_id CognitoUserPoolRegionalConfigurationAttachment#external_id}.

---

###### `in_entity_id`<sup>Optional</sup> <a name="in_entity_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.inEntityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_entity_id CognitoUserPoolRegionalConfigurationAttachment#in_entity_id}.

---

###### `in_template_id`<sup>Optional</sup> <a name="in_template_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.inTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#in_template_id CognitoUserPoolRegionalConfigurationAttachment#in_template_id}.

---

###### `origination_identity`<sup>Optional</sup> <a name="origination_identity" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.originationIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#origination_identity CognitoUserPoolRegionalConfigurationAttachment#origination_identity}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.putEumsSms.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_user_pool_regional_configuration_attachment#region CognitoUserPoolRegionalConfigurationAttachment#region}.

---

##### `reset_eums_sms` <a name="reset_eums_sms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetEumsSms"></a>

```python
def reset_eums_sms() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_sns_caller_arn` <a name="reset_sns_caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsCallerArn"></a>

```python
def reset_sns_caller_arn() -> None
```

##### `reset_sns_region` <a name="reset_sns_region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resetSnsRegion"></a>

```python
def reset_sns_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">eums_sms</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput">eums_sms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput">sns_caller_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput">sns_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">sns_caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">sns_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eums_sms`<sup>Required</sup> <a name="eums_sms" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```python
eums_sms: CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `eums_sms_input`<sup>Optional</sup> <a name="eums_sms_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSmsInput"></a>

```python
eums_sms_input: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `sns_caller_arn_input`<sup>Optional</sup> <a name="sns_caller_arn_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```python
sns_caller_arn_input: str
```

- *Type:* str

---

##### `sns_region_input`<sup>Optional</sup> <a name="sns_region_input" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegionInput"></a>

```python
sns_region_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `sns_caller_arn`<sup>Required</sup> <a name="sns_caller_arn" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```python
sns_caller_arn: str
```

- *Type:* str

---

##### `sns_region`<sup>Required</sup> <a name="sns_region" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```python
sns_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoUserPoolRegionalConfigurationAttachment.CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">CognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



