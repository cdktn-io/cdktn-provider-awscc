# `sagemakerPartnerApp` Submodule <a name="`sagemakerPartnerApp` Submodule" id="@cdktn/provider-awscc.sagemakerPartnerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPartnerApp <a name="SagemakerPartnerApp" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app awscc_sagemaker_partner_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerApp(
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
  execution_role_arn: str,
  name: str,
  tier: str,
  type: str,
  application_config: SagemakerPartnerAppApplicationConfig = None,
  app_version: str = None,
  client_token: str = None,
  enable_auto_minor_version_upgrade: bool | IResolvable = None,
  enable_iam_session_based_identity: bool | IResolvable = None,
  kms_key_id: str = None,
  maintenance_config: SagemakerPartnerAppMaintenanceConfig = None,
  tags: IResolvable | typing.List[SagemakerPartnerAppTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | The Auth type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The execution role for the user. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tier">tier</a></code> | <code>str</code> | The tier of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.appVersion">app_version</a></code> | <code>str</code> | The version of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | The client token for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableAutoMinorVersionUpgrade">enable_auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables automatic minor version upgrades for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableIamSessionBasedIdentity">enable_iam_session_based_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables IAM Session based Identity for PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.maintenanceConfig">maintenance_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]</code> | A list of tags to apply to the PartnerApp. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.authType"></a>

- *Type:* str

The Auth type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

The execution role for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.name"></a>

- *Type:* str

A name for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tier"></a>

- *Type:* str

The tier of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.type"></a>

- *Type:* str

The type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}

---

##### `application_config`<sup>Optional</sup> <a name="application_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.applicationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}

---

##### `app_version`<sup>Optional</sup> <a name="app_version" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.appVersion"></a>

- *Type:* str

The version of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.clientToken"></a>

- *Type:* str

The client token for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}

---

##### `enable_auto_minor_version_upgrade`<sup>Optional</sup> <a name="enable_auto_minor_version_upgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableAutoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

Enables automatic minor version upgrades for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}

---

##### `enable_iam_session_based_identity`<sup>Optional</sup> <a name="enable_iam_session_based_identity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.enableIamSessionBasedIdentity"></a>

- *Type:* bool | cdktn.IResolvable

Enables IAM Session based Identity for PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}

---

##### `maintenance_config`<sup>Optional</sup> <a name="maintenance_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.maintenanceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]

A list of tags to apply to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig">put_application_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig">put_maintenance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig">reset_application_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion">reset_app_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade">reset_enable_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity">reset_enable_iam_session_based_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig">reset_maintenance_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_config` <a name="put_application_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig"></a>

```python
def put_application_config(
  admin_users: typing.List[str] = None,
  arguments: typing.Mapping[str] = None
) -> None
```

###### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig.parameter.adminUsers"></a>

- *Type:* typing.List[str]

A list of users with administrator privileges for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#admin_users SagemakerPartnerApp#admin_users}

---

###### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putApplicationConfig.parameter.arguments"></a>

- *Type:* typing.Mapping[str]

A list of arguments to pass to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#arguments SagemakerPartnerApp#arguments}

---

##### `put_maintenance_config` <a name="put_maintenance_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig"></a>

```python
def put_maintenance_config(
  maintenance_window_start: str = None
) -> None
```

###### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putMaintenanceConfig.parameter.maintenanceWindowStart"></a>

- *Type:* str

The maintenance window start day and time for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#maintenance_window_start SagemakerPartnerApp#maintenance_window_start}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerPartnerAppTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]

---

##### `reset_application_config` <a name="reset_application_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetApplicationConfig"></a>

```python
def reset_application_config() -> None
```

##### `reset_app_version` <a name="reset_app_version" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetAppVersion"></a>

```python
def reset_app_version() -> None
```

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_enable_auto_minor_version_upgrade` <a name="reset_enable_auto_minor_version_upgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableAutoMinorVersionUpgrade"></a>

```python
def reset_enable_auto_minor_version_upgrade() -> None
```

##### `reset_enable_iam_session_based_identity` <a name="reset_enable_iam_session_based_identity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetEnableIamSessionBasedIdentity"></a>

```python
def reset_enable_iam_session_based_identity() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_maintenance_config` <a name="reset_maintenance_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetMaintenanceConfig"></a>

```python
def reset_maintenance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerPartnerApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerPartnerApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerPartnerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerPartnerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate">current_version_eol_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig">maintenance_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput">application_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput">app_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput">enable_auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput">enable_iam_session_based_identity_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput">maintenance_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion">app_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade">enable_auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity">enable_iam_session_based_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_config`<sup>Required</sup> <a name="application_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfig"></a>

```python
application_config: SagemakerPartnerAppApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference">SagemakerPartnerAppApplicationConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `current_version_eol_date`<sup>Required</sup> <a name="current_version_eol_date" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.currentVersionEolDate"></a>

```python
current_version_eol_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_config`<sup>Required</sup> <a name="maintenance_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfig"></a>

```python
maintenance_config: SagemakerPartnerAppMaintenanceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference">SagemakerPartnerAppMaintenanceConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tags"></a>

```python
tags: SagemakerPartnerAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList">SagemakerPartnerAppTagsList</a>

---

##### `application_config_input`<sup>Optional</sup> <a name="application_config_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.applicationConfigInput"></a>

```python
application_config_input: IResolvable | SagemakerPartnerAppApplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---

##### `app_version_input`<sup>Optional</sup> <a name="app_version_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersionInput"></a>

```python
app_version_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `enable_auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="enable_auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgradeInput"></a>

```python
enable_auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iam_session_based_identity_input`<sup>Optional</sup> <a name="enable_iam_session_based_identity_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentityInput"></a>

```python
enable_iam_session_based_identity_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `maintenance_config_input`<sup>Optional</sup> <a name="maintenance_config_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.maintenanceConfigInput"></a>

```python
maintenance_config_input: IResolvable | SagemakerPartnerAppMaintenanceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerPartnerAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `enable_auto_minor_version_upgrade`<sup>Required</sup> <a name="enable_auto_minor_version_upgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableAutoMinorVersionUpgrade"></a>

```python
enable_auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iam_session_based_identity`<sup>Required</sup> <a name="enable_iam_session_based_identity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.enableIamSessionBasedIdentity"></a>

```python
enable_iam_session_based_identity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPartnerAppApplicationConfig <a name="SagemakerPartnerAppApplicationConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig(
  admin_users: typing.List[str] = None,
  arguments: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | A list of users with administrator privileges for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | A list of arguments to pass to the PartnerApp. |

---

##### `admin_users`<sup>Optional</sup> <a name="admin_users" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

A list of users with administrator privileges for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#admin_users SagemakerPartnerApp#admin_users}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of arguments to pass to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#arguments SagemakerPartnerApp#arguments}

---

### SagemakerPartnerAppConfig <a name="SagemakerPartnerAppConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str,
  execution_role_arn: str,
  name: str,
  tier: str,
  type: str,
  application_config: SagemakerPartnerAppApplicationConfig = None,
  app_version: str = None,
  client_token: str = None,
  enable_auto_minor_version_upgrade: bool | IResolvable = None,
  enable_iam_session_based_identity: bool | IResolvable = None,
  kms_key_id: str = None,
  maintenance_config: SagemakerPartnerAppMaintenanceConfig = None,
  tags: IResolvable | typing.List[SagemakerPartnerAppTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType">auth_type</a></code> | <code>str</code> | The Auth type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | The execution role for the user. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name">name</a></code> | <code>str</code> | A name for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier">tier</a></code> | <code>str</code> | The tier of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type">type</a></code> | <code>str</code> | The type of PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig">application_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion">app_version</a></code> | <code>str</code> | The version of the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken">client_token</a></code> | <code>str</code> | The client token for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade">enable_auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables automatic minor version upgrades for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity">enable_iam_session_based_identity</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables IAM Session based Identity for PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig">maintenance_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | A collection of settings that specify the maintenance schedule for the PartnerApp. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]</code> | A list of tags to apply to the PartnerApp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The Auth type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#auth_type SagemakerPartnerApp#auth_type}

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

The execution role for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#execution_role_arn SagemakerPartnerApp#execution_role_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#name SagemakerPartnerApp#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

The tier of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#tier SagemakerPartnerApp#tier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#type SagemakerPartnerApp#type}

---

##### `application_config`<sup>Optional</sup> <a name="application_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.applicationConfig"></a>

```python
application_config: SagemakerPartnerAppApplicationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#application_config SagemakerPartnerApp#application_config}

---

##### `app_version`<sup>Optional</sup> <a name="app_version" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

The version of the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#app_version SagemakerPartnerApp#app_version}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

The client token for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#client_token SagemakerPartnerApp#client_token}

---

##### `enable_auto_minor_version_upgrade`<sup>Optional</sup> <a name="enable_auto_minor_version_upgrade" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableAutoMinorVersionUpgrade"></a>

```python
enable_auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables automatic minor version upgrades for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#enable_auto_minor_version_upgrade SagemakerPartnerApp#enable_auto_minor_version_upgrade}

---

##### `enable_iam_session_based_identity`<sup>Optional</sup> <a name="enable_iam_session_based_identity" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.enableIamSessionBasedIdentity"></a>

```python
enable_iam_session_based_identity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables IAM Session based Identity for PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#enable_iam_session_based_identity SagemakerPartnerApp#enable_iam_session_based_identity}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS KMS customer managed key used to encrypt the data associated with the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#kms_key_id SagemakerPartnerApp#kms_key_id}

---

##### `maintenance_config`<sup>Optional</sup> <a name="maintenance_config" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.maintenanceConfig"></a>

```python
maintenance_config: SagemakerPartnerAppMaintenanceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

A collection of settings that specify the maintenance schedule for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#maintenance_config SagemakerPartnerApp#maintenance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerPartnerAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]

A list of tags to apply to the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#tags SagemakerPartnerApp#tags}

---

### SagemakerPartnerAppMaintenanceConfig <a name="SagemakerPartnerAppMaintenanceConfig" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig(
  maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>str</code> | The maintenance window start day and time for the PartnerApp. |

---

##### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: str
```

- *Type:* str

The maintenance window start day and time for the PartnerApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#maintenance_window_start SagemakerPartnerApp#maintenance_window_start}

---

### SagemakerPartnerAppTags <a name="SagemakerPartnerAppTags" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#key SagemakerPartnerApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_partner_app#value SagemakerPartnerApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPartnerAppApplicationConfigOutputReference <a name="SagemakerPartnerAppApplicationConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers">reset_admin_users</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_users` <a name="reset_admin_users" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetAdminUsers"></a>

```python
def reset_admin_users() -> None
```

##### `reset_arguments` <a name="reset_arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput">admin_users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers">admin_users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_users_input`<sup>Optional</sup> <a name="admin_users_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsersInput"></a>

```python
admin_users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `admin_users`<sup>Required</sup> <a name="admin_users" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.adminUsers"></a>

```python
admin_users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerPartnerAppApplicationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppApplicationConfig">SagemakerPartnerAppApplicationConfig</a>

---


### SagemakerPartnerAppMaintenanceConfigOutputReference <a name="SagemakerPartnerAppMaintenanceConfigOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart">reset_maintenance_window_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maintenance_window_start` <a name="reset_maintenance_window_start" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.resetMaintenanceWindowStart"></a>

```python
def reset_maintenance_window_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput">maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_window_start_input`<sup>Optional</sup> <a name="maintenance_window_start_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStartInput"></a>

```python
maintenance_window_start_input: str
```

- *Type:* str

---

##### `maintenance_window_start`<sup>Required</sup> <a name="maintenance_window_start" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerPartnerAppMaintenanceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppMaintenanceConfig">SagemakerPartnerAppMaintenanceConfig</a>

---


### SagemakerPartnerAppTagsList <a name="SagemakerPartnerAppTagsList" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerPartnerAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerPartnerAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>]

---


### SagemakerPartnerAppTagsOutputReference <a name="SagemakerPartnerAppTagsOutputReference" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_partner_app

sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerPartnerAppTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerPartnerApp.SagemakerPartnerAppTags">SagemakerPartnerAppTags</a>

---



