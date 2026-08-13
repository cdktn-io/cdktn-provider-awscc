# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktn/provider-awscc.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace_name: str,
  admin_password_secret_kms_key_id: str = None,
  admin_username: str = None,
  admin_user_password: str = None,
  db_name: str = None,
  default_iam_role_arn: str = None,
  final_snapshot_name: str = None,
  final_snapshot_retention_period: typing.Union[int, float] = None,
  iam_roles: typing.List[str] = None,
  kms_key_id: str = None,
  log_exports: typing.List[str] = None,
  manage_admin_password: bool | IResolvable = None,
  namespace_resource_policy: str = None,
  redshift_idc_application_arn: str = None,
  snapshot_copy_configurations: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations] = None,
  tags: IResolvable | typing.List[RedshiftserverlessNamespaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword">admin_user_password</a></code> | <code>str</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotRetentionPeriod">final_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports">log_exports</a></code> | <code>typing.List[str]</code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword">manage_admin_password</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.redshiftIdcApplicationArn">redshift_idc_application_arn</a></code> | <code>str</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.snapshotCopyConfigurations">snapshot_copy_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]</code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]</code> | The list of tags for the namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName"></a>

- *Type:* str

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `admin_password_secret_kms_key_id`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId"></a>

- *Type:* str

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername"></a>

- *Type:* str

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `admin_user_password`<sup>Optional</sup> <a name="admin_user_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword"></a>

- *Type:* str

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName"></a>

- *Type:* str

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* str

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotName"></a>

- *Type:* str

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `final_snapshot_retention_period`<sup>Optional</sup> <a name="final_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports"></a>

- *Type:* typing.List[str]

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `manage_admin_password`<sup>Optional</sup> <a name="manage_admin_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword"></a>

- *Type:* bool | cdktn.IResolvable

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `namespace_resource_policy`<sup>Optional</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceResourcePolicy"></a>

- *Type:* str

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `redshift_idc_application_arn`<sup>Optional</sup> <a name="redshift_idc_application_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.redshiftIdcApplicationArn"></a>

- *Type:* str

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `snapshot_copy_configurations`<sup>Optional</sup> <a name="snapshot_copy_configurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.snapshotCopyConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations">put_snapshot_copy_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">reset_admin_password_secret_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">reset_admin_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">reset_default_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName">reset_final_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod">reset_final_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">reset_log_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">reset_manage_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy">reset_namespace_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn">reset_redshift_idc_application_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations">reset_snapshot_copy_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_snapshot_copy_configurations` <a name="put_snapshot_copy_configurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations"></a>

```python
def put_snapshot_copy_configurations(
  value: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftserverlessNamespaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]

---

##### `reset_admin_password_secret_kms_key_id` <a name="reset_admin_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```python
def reset_admin_password_secret_kms_key_id() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_admin_user_password` <a name="reset_admin_user_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```python
def reset_admin_user_password() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_default_iam_role_arn` <a name="reset_default_iam_role_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```python
def reset_default_iam_role_arn() -> None
```

##### `reset_final_snapshot_name` <a name="reset_final_snapshot_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName"></a>

```python
def reset_final_snapshot_name() -> None
```

##### `reset_final_snapshot_retention_period` <a name="reset_final_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod"></a>

```python
def reset_final_snapshot_retention_period() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_log_exports` <a name="reset_log_exports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```python
def reset_log_exports() -> None
```

##### `reset_manage_admin_password` <a name="reset_manage_admin_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```python
def reset_manage_admin_password() -> None
```

##### `reset_namespace_resource_policy` <a name="reset_namespace_resource_policy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy"></a>

```python
def reset_namespace_resource_policy() -> None
```

##### `reset_redshift_idc_application_arn` <a name="reset_redshift_idc_application_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn"></a>

```python
def reset_redshift_idc_application_arn() -> None
```

##### `reset_snapshot_copy_configurations` <a name="reset_snapshot_copy_configurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations"></a>

```python
def reset_snapshot_copy_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace">namespace</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations">snapshot_copy_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">admin_password_secret_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">admin_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">default_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput">final_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput">final_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">log_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">manage_admin_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput">namespace_resource_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput">redshift_idc_application_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput">snapshot_copy_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">admin_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod">final_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">manage_admin_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn">redshift_idc_application_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace"></a>

```python
namespace: RedshiftserverlessNamespaceNamespaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a>

---

##### `snapshot_copy_configurations`<sup>Required</sup> <a name="snapshot_copy_configurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations"></a>

```python
snapshot_copy_configurations: RedshiftserverlessNamespaceSnapshotCopyConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```python
tags: RedshiftserverlessNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a>

---

##### `admin_password_secret_kms_key_id_input`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```python
admin_password_secret_kms_key_id_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `admin_user_password_input`<sup>Optional</sup> <a name="admin_user_password_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```python
admin_user_password_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `default_iam_role_arn_input`<sup>Optional</sup> <a name="default_iam_role_arn_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```python
default_iam_role_arn_input: str
```

- *Type:* str

---

##### `final_snapshot_name_input`<sup>Optional</sup> <a name="final_snapshot_name_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput"></a>

```python
final_snapshot_name_input: str
```

- *Type:* str

---

##### `final_snapshot_retention_period_input`<sup>Optional</sup> <a name="final_snapshot_retention_period_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput"></a>

```python
final_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `log_exports_input`<sup>Optional</sup> <a name="log_exports_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```python
log_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manage_admin_password_input`<sup>Optional</sup> <a name="manage_admin_password_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```python
manage_admin_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `namespace_resource_policy_input`<sup>Optional</sup> <a name="namespace_resource_policy_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput"></a>

```python
namespace_resource_policy_input: str
```

- *Type:* str

---

##### `redshift_idc_application_arn_input`<sup>Optional</sup> <a name="redshift_idc_application_arn_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput"></a>

```python
redshift_idc_application_arn_input: str
```

- *Type:* str

---

##### `snapshot_copy_configurations_input`<sup>Optional</sup> <a name="snapshot_copy_configurations_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput"></a>

```python
snapshot_copy_configurations_input: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftserverlessNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]

---

##### `admin_password_secret_kms_key_id`<sup>Required</sup> <a name="admin_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```python
admin_password_secret_kms_key_id: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `admin_user_password`<sup>Required</sup> <a name="admin_user_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```python
admin_user_password: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `default_iam_role_arn`<sup>Required</sup> <a name="default_iam_role_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

---

##### `final_snapshot_name`<sup>Required</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

---

##### `final_snapshot_retention_period`<sup>Required</sup> <a name="final_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod"></a>

```python
final_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `log_exports`<sup>Required</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manage_admin_password`<sup>Required</sup> <a name="manage_admin_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```python
manage_admin_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `namespace_resource_policy`<sup>Required</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy"></a>

```python
namespace_resource_policy: str
```

- *Type:* str

---

##### `redshift_idc_application_arn`<sup>Required</sup> <a name="redshift_idc_application_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn"></a>

```python
redshift_idc_application_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  namespace_name: str,
  admin_password_secret_kms_key_id: str = None,
  admin_username: str = None,
  admin_user_password: str = None,
  db_name: str = None,
  default_iam_role_arn: str = None,
  final_snapshot_name: str = None,
  final_snapshot_retention_period: typing.Union[int, float] = None,
  iam_roles: typing.List[str] = None,
  kms_key_id: str = None,
  log_exports: typing.List[str] = None,
  manage_admin_password: bool | IResolvable = None,
  namespace_resource_policy: str = None,
  redshift_idc_application_arn: str = None,
  snapshot_copy_configurations: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations] = None,
  tags: IResolvable | typing.List[RedshiftserverlessNamespaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">admin_user_password</a></code> | <code>str</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">db_name</a></code> | <code>str</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod">final_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">manage_admin_password</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn">redshift_idc_application_arn</a></code> | <code>str</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations">snapshot_copy_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]</code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]</code> | The list of tags for the namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `admin_password_secret_kms_key_id`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```python
admin_password_secret_kms_key_id: str
```

- *Type:* str

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `admin_user_password`<sup>Optional</sup> <a name="admin_user_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```python
admin_user_password: str
```

- *Type:* str

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `final_snapshot_retention_period`<sup>Optional</sup> <a name="final_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod"></a>

```python
final_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `manage_admin_password`<sup>Optional</sup> <a name="manage_admin_password" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```python
manage_admin_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `namespace_resource_policy`<sup>Optional</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy"></a>

```python
namespace_resource_policy: str
```

- *Type:* str

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `redshift_idc_application_arn`<sup>Optional</sup> <a name="redshift_idc_application_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn"></a>

```python
redshift_idc_application_arn: str
```

- *Type:* str

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `snapshot_copy_configurations`<sup>Optional</sup> <a name="snapshot_copy_configurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations"></a>

```python
snapshot_copy_configurations: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftserverlessNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

### RedshiftserverlessNamespaceNamespace <a name="RedshiftserverlessNamespaceNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace()
```


### RedshiftserverlessNamespaceSnapshotCopyConfigurations <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations(
  destination_kms_key_id: str = None,
  destination_region: str = None,
  snapshot_retention_period: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId">destination_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod">snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}. |

---

##### `destination_kms_key_id`<sup>Optional</sup> <a name="destination_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId"></a>

```python
destination_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}.

---

##### `destination_region`<sup>Optional</sup> <a name="destination_region" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}.

---

##### `snapshot_retention_period`<sup>Optional</sup> <a name="snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod"></a>

```python
snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}.

---

### RedshiftserverlessNamespaceTags <a name="RedshiftserverlessNamespaceTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessNamespaceNamespaceOutputReference <a name="RedshiftserverlessNamespaceNamespaceOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn">admin_password_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn">namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password_secret_arn`<sup>Required</sup> <a name="admin_password_secret_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn"></a>

```python
admin_password_secret_arn: str
```

- *Type:* str

---

##### `admin_password_secret_kms_key_id`<sup>Required</sup> <a name="admin_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId"></a>

```python
admin_password_secret_kms_key_id: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `default_iam_role_arn`<sup>Required</sup> <a name="default_iam_role_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `log_exports`<sup>Required</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_arn`<sup>Required</sup> <a name="namespace_arn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn"></a>

```python
namespace_arn: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: RedshiftserverlessNamespaceNamespace
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a>

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsList <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftserverlessNamespaceSnapshotCopyConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>]

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId">reset_destination_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion">reset_destination_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod">reset_snapshot_retention_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_kms_key_id` <a name="reset_destination_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId"></a>

```python
def reset_destination_kms_key_id() -> None
```

##### `reset_destination_region` <a name="reset_destination_region" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion"></a>

```python
def reset_destination_region() -> None
```

##### `reset_snapshot_retention_period` <a name="reset_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod"></a>

```python
def reset_snapshot_retention_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput">destination_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput">destination_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput">snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId">destination_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod">snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_kms_key_id_input`<sup>Optional</sup> <a name="destination_kms_key_id_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput"></a>

```python
destination_kms_key_id_input: str
```

- *Type:* str

---

##### `destination_region_input`<sup>Optional</sup> <a name="destination_region_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput"></a>

```python
destination_region_input: str
```

- *Type:* str

---

##### `snapshot_retention_period_input`<sup>Optional</sup> <a name="snapshot_retention_period_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput"></a>

```python
snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_kms_key_id`<sup>Required</sup> <a name="destination_kms_key_id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId"></a>

```python
destination_kms_key_id: str
```

- *Type:* str

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `snapshot_retention_period`<sup>Required</sup> <a name="snapshot_retention_period" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod"></a>

```python
snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftserverlessNamespaceSnapshotCopyConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>

---


### RedshiftserverlessNamespaceTagsList <a name="RedshiftserverlessNamespaceTagsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftserverlessNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftserverlessNamespaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>]

---


### RedshiftserverlessNamespaceTagsOutputReference <a name="RedshiftserverlessNamespaceTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftserverlessNamespaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>

---



