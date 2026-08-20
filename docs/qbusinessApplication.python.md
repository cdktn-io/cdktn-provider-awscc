# `qbusinessApplication` Submodule <a name="`qbusinessApplication` Submodule" id="@cdktn/provider-awscc.qbusinessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessApplication <a name="QbusinessApplication" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application awscc_qbusiness_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  attachments_configuration: QbusinessApplicationAttachmentsConfiguration = None,
  auto_subscription_configuration: QbusinessApplicationAutoSubscriptionConfiguration = None,
  client_ids_for_oidc: typing.List[str] = None,
  description: str = None,
  encryption_configuration: QbusinessApplicationEncryptionConfiguration = None,
  iam_identity_provider_arn: str = None,
  identity_center_instance_arn: str = None,
  identity_type: str = None,
  personalization_configuration: QbusinessApplicationPersonalizationConfiguration = None,
  q_apps_configuration: QbusinessApplicationQAppsConfiguration = None,
  quick_sight_configuration: QbusinessApplicationQuickSightConfiguration = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[QbusinessApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.attachmentsConfiguration">attachments_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.autoSubscriptionConfiguration">auto_subscription_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.clientIdsForOidc">client_ids_for_oidc</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.iamIdentityProviderArn">iam_identity_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.personalizationConfiguration">personalization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.qAppsConfiguration">q_apps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.quickSightConfiguration">quick_sight_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}.

---

##### `attachments_configuration`<sup>Optional</sup> <a name="attachments_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.attachmentsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}.

---

##### `auto_subscription_configuration`<sup>Optional</sup> <a name="auto_subscription_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.autoSubscriptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}.

---

##### `client_ids_for_oidc`<sup>Optional</sup> <a name="client_ids_for_oidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.clientIdsForOidc"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}.

---

##### `iam_identity_provider_arn`<sup>Optional</sup> <a name="iam_identity_provider_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.iamIdentityProviderArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}.

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.identityCenterInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}.

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.identityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}.

---

##### `personalization_configuration`<sup>Optional</sup> <a name="personalization_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.personalizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}.

---

##### `q_apps_configuration`<sup>Optional</sup> <a name="q_apps_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.qAppsConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}.

---

##### `quick_sight_configuration`<sup>Optional</sup> <a name="quick_sight_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.quickSightConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration">put_attachments_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration">put_auto_subscription_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration">put_personalization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration">put_q_apps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration">put_quick_sight_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration">reset_attachments_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration">reset_auto_subscription_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc">reset_client_ids_for_oidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn">reset_iam_identity_provider_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn">reset_identity_center_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration">reset_personalization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration">reset_q_apps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration">reset_quick_sight_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attachments_configuration` <a name="put_attachments_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration"></a>

```python
def put_attachments_configuration(
  attachments_control_mode: str = None
) -> None
```

###### `attachments_control_mode`<sup>Optional</sup> <a name="attachments_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration.parameter.attachmentsControlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}.

---

##### `put_auto_subscription_configuration` <a name="put_auto_subscription_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration"></a>

```python
def put_auto_subscription_configuration(
  auto_subscribe: str = None,
  default_subscription_type: str = None
) -> None
```

###### `auto_subscribe`<sup>Optional</sup> <a name="auto_subscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration.parameter.autoSubscribe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}.

---

###### `default_subscription_type`<sup>Optional</sup> <a name="default_subscription_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration.parameter.defaultSubscriptionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}.

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}.

---

##### `put_personalization_configuration` <a name="put_personalization_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration"></a>

```python
def put_personalization_configuration(
  personalization_control_mode: str = None
) -> None
```

###### `personalization_control_mode`<sup>Optional</sup> <a name="personalization_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration.parameter.personalizationControlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}.

---

##### `put_q_apps_configuration` <a name="put_q_apps_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration"></a>

```python
def put_q_apps_configuration(
  q_apps_control_mode: str = None
) -> None
```

###### `q_apps_control_mode`<sup>Optional</sup> <a name="q_apps_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration.parameter.qAppsControlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}.

---

##### `put_quick_sight_configuration` <a name="put_quick_sight_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration"></a>

```python
def put_quick_sight_configuration(
  client_namespace: str = None
) -> None
```

###### `client_namespace`<sup>Optional</sup> <a name="client_namespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration.parameter.clientNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QbusinessApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]

---

##### `reset_attachments_configuration` <a name="reset_attachments_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration"></a>

```python
def reset_attachments_configuration() -> None
```

##### `reset_auto_subscription_configuration` <a name="reset_auto_subscription_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration"></a>

```python
def reset_auto_subscription_configuration() -> None
```

##### `reset_client_ids_for_oidc` <a name="reset_client_ids_for_oidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc"></a>

```python
def reset_client_ids_for_oidc() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_iam_identity_provider_arn` <a name="reset_iam_identity_provider_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn"></a>

```python
def reset_iam_identity_provider_arn() -> None
```

##### `reset_identity_center_instance_arn` <a name="reset_identity_center_instance_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn"></a>

```python
def reset_identity_center_instance_arn() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_personalization_configuration` <a name="reset_personalization_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration"></a>

```python
def reset_personalization_configuration() -> None
```

##### `reset_q_apps_configuration` <a name="reset_q_apps_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration"></a>

```python
def reset_q_apps_configuration() -> None
```

##### `reset_quick_sight_configuration` <a name="reset_quick_sight_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration"></a>

```python
def reset_quick_sight_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QbusinessApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QbusinessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration">attachments_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration">auto_subscription_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn">identity_center_application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration">personalization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration">q_apps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration">quick_sight_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput">attachments_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput">auto_subscription_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput">client_ids_for_oidc_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput">iam_identity_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput">identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput">personalization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput">q_apps_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput">quick_sight_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc">client_ids_for_oidc</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn">iam_identity_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `attachments_configuration`<sup>Required</sup> <a name="attachments_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration"></a>

```python
attachments_configuration: QbusinessApplicationAttachmentsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a>

---

##### `auto_subscription_configuration`<sup>Required</sup> <a name="auto_subscription_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration"></a>

```python
auto_subscription_configuration: QbusinessApplicationAutoSubscriptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration"></a>

```python
encryption_configuration: QbusinessApplicationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_center_application_arn`<sup>Required</sup> <a name="identity_center_application_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn"></a>

```python
identity_center_application_arn: str
```

- *Type:* str

---

##### `personalization_configuration`<sup>Required</sup> <a name="personalization_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration"></a>

```python
personalization_configuration: QbusinessApplicationPersonalizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a>

---

##### `q_apps_configuration`<sup>Required</sup> <a name="q_apps_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration"></a>

```python
q_apps_configuration: QbusinessApplicationQAppsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a>

---

##### `quick_sight_configuration`<sup>Required</sup> <a name="quick_sight_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration"></a>

```python
quick_sight_configuration: QbusinessApplicationQuickSightConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags"></a>

```python
tags: QbusinessApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `attachments_configuration_input`<sup>Optional</sup> <a name="attachments_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput"></a>

```python
attachments_configuration_input: IResolvable | QbusinessApplicationAttachmentsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---

##### `auto_subscription_configuration_input`<sup>Optional</sup> <a name="auto_subscription_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput"></a>

```python
auto_subscription_configuration_input: IResolvable | QbusinessApplicationAutoSubscriptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---

##### `client_ids_for_oidc_input`<sup>Optional</sup> <a name="client_ids_for_oidc_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput"></a>

```python
client_ids_for_oidc_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | QbusinessApplicationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---

##### `iam_identity_provider_arn_input`<sup>Optional</sup> <a name="iam_identity_provider_arn_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput"></a>

```python
iam_identity_provider_arn_input: str
```

- *Type:* str

---

##### `identity_center_instance_arn_input`<sup>Optional</sup> <a name="identity_center_instance_arn_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput"></a>

```python
identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `personalization_configuration_input`<sup>Optional</sup> <a name="personalization_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput"></a>

```python
personalization_configuration_input: IResolvable | QbusinessApplicationPersonalizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---

##### `q_apps_configuration_input`<sup>Optional</sup> <a name="q_apps_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput"></a>

```python
q_apps_configuration_input: IResolvable | QbusinessApplicationQAppsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---

##### `quick_sight_configuration_input`<sup>Optional</sup> <a name="quick_sight_configuration_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput"></a>

```python
quick_sight_configuration_input: IResolvable | QbusinessApplicationQuickSightConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QbusinessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]

---

##### `client_ids_for_oidc`<sup>Required</sup> <a name="client_ids_for_oidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc"></a>

```python
client_ids_for_oidc: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `iam_identity_provider_arn`<sup>Required</sup> <a name="iam_identity_provider_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn"></a>

```python
iam_identity_provider_arn: str
```

- *Type:* str

---

##### `identity_center_instance_arn`<sup>Required</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessApplicationAttachmentsConfiguration <a name="QbusinessApplicationAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationAttachmentsConfiguration(
  attachments_control_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode">attachments_control_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}. |

---

##### `attachments_control_mode`<sup>Optional</sup> <a name="attachments_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode"></a>

```python
attachments_control_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}.

---

### QbusinessApplicationAutoSubscriptionConfiguration <a name="QbusinessApplicationAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration(
  auto_subscribe: str = None,
  default_subscription_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe">auto_subscribe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType">default_subscription_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}. |

---

##### `auto_subscribe`<sup>Optional</sup> <a name="auto_subscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe"></a>

```python
auto_subscribe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}.

---

##### `default_subscription_type`<sup>Optional</sup> <a name="default_subscription_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType"></a>

```python
default_subscription_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}.

---

### QbusinessApplicationConfig <a name="QbusinessApplicationConfig" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  attachments_configuration: QbusinessApplicationAttachmentsConfiguration = None,
  auto_subscription_configuration: QbusinessApplicationAutoSubscriptionConfiguration = None,
  client_ids_for_oidc: typing.List[str] = None,
  description: str = None,
  encryption_configuration: QbusinessApplicationEncryptionConfiguration = None,
  iam_identity_provider_arn: str = None,
  identity_center_instance_arn: str = None,
  identity_type: str = None,
  personalization_configuration: QbusinessApplicationPersonalizationConfiguration = None,
  q_apps_configuration: QbusinessApplicationQAppsConfiguration = None,
  quick_sight_configuration: QbusinessApplicationQuickSightConfiguration = None,
  role_arn: str = None,
  tags: IResolvable | typing.List[QbusinessApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration">attachments_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration">auto_subscription_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc">client_ids_for_oidc</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn">iam_identity_provider_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn">identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration">personalization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration">q_apps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration">quick_sight_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}.

---

##### `attachments_configuration`<sup>Optional</sup> <a name="attachments_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration"></a>

```python
attachments_configuration: QbusinessApplicationAttachmentsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}.

---

##### `auto_subscription_configuration`<sup>Optional</sup> <a name="auto_subscription_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration"></a>

```python
auto_subscription_configuration: QbusinessApplicationAutoSubscriptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}.

---

##### `client_ids_for_oidc`<sup>Optional</sup> <a name="client_ids_for_oidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc"></a>

```python
client_ids_for_oidc: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#description QbusinessApplication#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: QbusinessApplicationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}.

---

##### `iam_identity_provider_arn`<sup>Optional</sup> <a name="iam_identity_provider_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn"></a>

```python
iam_identity_provider_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}.

---

##### `identity_center_instance_arn`<sup>Optional</sup> <a name="identity_center_instance_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn"></a>

```python
identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}.

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}.

---

##### `personalization_configuration`<sup>Optional</sup> <a name="personalization_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration"></a>

```python
personalization_configuration: QbusinessApplicationPersonalizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}.

---

##### `q_apps_configuration`<sup>Optional</sup> <a name="q_apps_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration"></a>

```python
q_apps_configuration: QbusinessApplicationQAppsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}.

---

##### `quick_sight_configuration`<sup>Optional</sup> <a name="quick_sight_configuration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration"></a>

```python
quick_sight_configuration: QbusinessApplicationQuickSightConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QbusinessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}.

---

### QbusinessApplicationEncryptionConfiguration <a name="QbusinessApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationEncryptionConfiguration(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}.

---

### QbusinessApplicationPersonalizationConfiguration <a name="QbusinessApplicationPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationPersonalizationConfiguration(
  personalization_control_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode">personalization_control_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}. |

---

##### `personalization_control_mode`<sup>Optional</sup> <a name="personalization_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode"></a>

```python
personalization_control_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}.

---

### QbusinessApplicationQAppsConfiguration <a name="QbusinessApplicationQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationQAppsConfiguration(
  q_apps_control_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode">q_apps_control_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}. |

---

##### `q_apps_control_mode`<sup>Optional</sup> <a name="q_apps_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode"></a>

```python
q_apps_control_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}.

---

### QbusinessApplicationQuickSightConfiguration <a name="QbusinessApplicationQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationQuickSightConfiguration(
  client_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace">client_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}. |

---

##### `client_namespace`<sup>Optional</sup> <a name="client_namespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace"></a>

```python
client_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}.

---

### QbusinessApplicationTags <a name="QbusinessApplicationTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#key QbusinessApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#value QbusinessApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#key QbusinessApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/qbusiness_application#value QbusinessApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessApplicationAttachmentsConfigurationOutputReference <a name="QbusinessApplicationAttachmentsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode">reset_attachments_control_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attachments_control_mode` <a name="reset_attachments_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode"></a>

```python
def reset_attachments_control_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput">attachments_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode">attachments_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachments_control_mode_input`<sup>Optional</sup> <a name="attachments_control_mode_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput"></a>

```python
attachments_control_mode_input: str
```

- *Type:* str

---

##### `attachments_control_mode`<sup>Required</sup> <a name="attachments_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode"></a>

```python
attachments_control_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationAttachmentsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---


### QbusinessApplicationAutoSubscriptionConfigurationOutputReference <a name="QbusinessApplicationAutoSubscriptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe">reset_auto_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType">reset_default_subscription_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_subscribe` <a name="reset_auto_subscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe"></a>

```python
def reset_auto_subscribe() -> None
```

##### `reset_default_subscription_type` <a name="reset_default_subscription_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType"></a>

```python
def reset_default_subscription_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput">auto_subscribe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput">default_subscription_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe">auto_subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType">default_subscription_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_subscribe_input`<sup>Optional</sup> <a name="auto_subscribe_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput"></a>

```python
auto_subscribe_input: str
```

- *Type:* str

---

##### `default_subscription_type_input`<sup>Optional</sup> <a name="default_subscription_type_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput"></a>

```python
default_subscription_type_input: str
```

- *Type:* str

---

##### `auto_subscribe`<sup>Required</sup> <a name="auto_subscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe"></a>

```python
auto_subscribe: str
```

- *Type:* str

---

##### `default_subscription_type`<sup>Required</sup> <a name="default_subscription_type" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType"></a>

```python
default_subscription_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationAutoSubscriptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---


### QbusinessApplicationEncryptionConfigurationOutputReference <a name="QbusinessApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---


### QbusinessApplicationPersonalizationConfigurationOutputReference <a name="QbusinessApplicationPersonalizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode">reset_personalization_control_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_personalization_control_mode` <a name="reset_personalization_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode"></a>

```python
def reset_personalization_control_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput">personalization_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode">personalization_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `personalization_control_mode_input`<sup>Optional</sup> <a name="personalization_control_mode_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput"></a>

```python
personalization_control_mode_input: str
```

- *Type:* str

---

##### `personalization_control_mode`<sup>Required</sup> <a name="personalization_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode"></a>

```python
personalization_control_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationPersonalizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---


### QbusinessApplicationQAppsConfigurationOutputReference <a name="QbusinessApplicationQAppsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode">reset_q_apps_control_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_q_apps_control_mode` <a name="reset_q_apps_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode"></a>

```python
def reset_q_apps_control_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput">q_apps_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode">q_apps_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `q_apps_control_mode_input`<sup>Optional</sup> <a name="q_apps_control_mode_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput"></a>

```python
q_apps_control_mode_input: str
```

- *Type:* str

---

##### `q_apps_control_mode`<sup>Required</sup> <a name="q_apps_control_mode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode"></a>

```python
q_apps_control_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationQAppsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---


### QbusinessApplicationQuickSightConfigurationOutputReference <a name="QbusinessApplicationQuickSightConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace">reset_client_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_namespace` <a name="reset_client_namespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace"></a>

```python
def reset_client_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput">client_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace">client_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_namespace_input`<sup>Optional</sup> <a name="client_namespace_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput"></a>

```python
client_namespace_input: str
```

- *Type:* str

---

##### `client_namespace`<sup>Required</sup> <a name="client_namespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace"></a>

```python
client_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationQuickSightConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---


### QbusinessApplicationTagsList <a name="QbusinessApplicationTagsList" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>]

---


### QbusinessApplicationTagsOutputReference <a name="QbusinessApplicationTagsOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_application

qbusinessApplication.QbusinessApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags">QbusinessApplicationTags</a>

---



