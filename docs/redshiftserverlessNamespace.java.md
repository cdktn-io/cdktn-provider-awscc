# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktn/provider-awscc.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace awscc_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespace;

RedshiftserverlessNamespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .namespaceName(java.lang.String)
//  .adminPasswordSecretKmsKeyId(java.lang.String)
//  .adminUsername(java.lang.String)
//  .adminUserPassword(java.lang.String)
//  .dbName(java.lang.String)
//  .defaultIamRoleArn(java.lang.String)
//  .finalSnapshotName(java.lang.String)
//  .finalSnapshotRetentionPeriod(java.lang.Number)
//  .iamRoles(java.util.List<java.lang.String>)
//  .kmsKeyId(java.lang.String)
//  .logExports(java.util.List<java.lang.String>)
//  .manageAdminPassword(java.lang.Boolean|IResolvable)
//  .namespaceResourcePolicy(java.lang.String)
//  .redshiftIdcApplicationArn(java.lang.String)
//  .snapshotCopyConfigurations(IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations>)
//  .tags(IResolvable|java.util.List<RedshiftserverlessNamespaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword">manageAdminPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>java.lang.String</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.snapshotCopyConfigurations">snapshotCopyConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>></code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>></code> | The list of tags for the namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `adminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId"></a>

- *Type:* java.lang.String

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername"></a>

- *Type:* java.lang.String

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `adminUserPassword`<sup>Optional</sup> <a name="adminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword"></a>

- *Type:* java.lang.String

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* java.lang.String

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotName"></a>

- *Type:* java.lang.String

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `finalSnapshotRetentionPeriod`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.finalSnapshotRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles"></a>

- *Type:* java.util.List<java.lang.String>

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports"></a>

- *Type:* java.util.List<java.lang.String>

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `manageAdminPassword`<sup>Optional</sup> <a name="manageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceResourcePolicy"></a>

- *Type:* java.lang.String

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `redshiftIdcApplicationArn`<sup>Optional</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.redshiftIdcApplicationArn"></a>

- *Type:* java.lang.String

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `snapshotCopyConfigurations`<sup>Optional</sup> <a name="snapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.snapshotCopyConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>>

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>>

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations">putSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">resetAdminPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">resetAdminUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">resetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName">resetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod">resetFinalSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">resetManageAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy">resetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn">resetRedshiftIdcApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations">resetSnapshotCopyConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSnapshotCopyConfigurations` <a name="putSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations"></a>

```java
public void putSnapshotCopyConfigurations(IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putSnapshotCopyConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftserverlessNamespaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>>

---

##### `resetAdminPasswordSecretKmsKeyId` <a name="resetAdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```java
public void resetAdminPasswordSecretKmsKeyId()
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```java
public void resetAdminUsername()
```

##### `resetAdminUserPassword` <a name="resetAdminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```java
public void resetAdminUserPassword()
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDefaultIamRoleArn` <a name="resetDefaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```java
public void resetDefaultIamRoleArn()
```

##### `resetFinalSnapshotName` <a name="resetFinalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotName"></a>

```java
public void resetFinalSnapshotName()
```

##### `resetFinalSnapshotRetentionPeriod` <a name="resetFinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetFinalSnapshotRetentionPeriod"></a>

```java
public void resetFinalSnapshotRetentionPeriod()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```java
public void resetLogExports()
```

##### `resetManageAdminPassword` <a name="resetManageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```java
public void resetManageAdminPassword()
```

##### `resetNamespaceResourcePolicy` <a name="resetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetNamespaceResourcePolicy"></a>

```java
public void resetNamespaceResourcePolicy()
```

##### `resetRedshiftIdcApplicationArn` <a name="resetRedshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetRedshiftIdcApplicationArn"></a>

```java
public void resetRedshiftIdcApplicationArn()
```

##### `resetSnapshotCopyConfigurations` <a name="resetSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetSnapshotCopyConfigurations"></a>

```java
public void resetSnapshotCopyConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespace;

RedshiftserverlessNamespace.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespace;

RedshiftserverlessNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespace;

RedshiftserverlessNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespace;

RedshiftserverlessNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftserverlessNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace">namespace</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations">snapshotCopyConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">adminPasswordSecretKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">adminUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">defaultIamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput">finalSnapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput">finalSnapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">logExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">manageAdminPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput">namespaceResourcePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput">redshiftIdcApplicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput">snapshotCopyConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">manageAdminPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespace"></a>

```java
public RedshiftserverlessNamespaceNamespaceOutputReference getNamespace();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference">RedshiftserverlessNamespaceNamespaceOutputReference</a>

---

##### `snapshotCopyConfigurations`<sup>Required</sup> <a name="snapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurations"></a>

```java
public RedshiftserverlessNamespaceSnapshotCopyConfigurationsList getSnapshotCopyConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList">RedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```java
public RedshiftserverlessNamespaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList">RedshiftserverlessNamespaceTagsList</a>

---

##### `adminPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```java
public java.lang.String getAdminPasswordSecretKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `adminUserPasswordInput`<sup>Optional</sup> <a name="adminUserPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```java
public java.lang.String getAdminUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `defaultIamRoleArnInput`<sup>Optional</sup> <a name="defaultIamRoleArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```java
public java.lang.String getDefaultIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotNameInput`<sup>Optional</sup> <a name="finalSnapshotNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotNameInput"></a>

```java
public java.lang.String getFinalSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `finalSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getFinalSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```java
public java.util.List<java.lang.String> getLogExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manageAdminPasswordInput`<sup>Optional</sup> <a name="manageAdminPasswordInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getManageAdminPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceResourcePolicyInput`<sup>Optional</sup> <a name="namespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicyInput"></a>

```java
public java.lang.String getNamespaceResourcePolicyInput();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationArnInput`<sup>Optional</sup> <a name="redshiftIdcApplicationArnInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArnInput"></a>

```java
public java.lang.String getRedshiftIdcApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `snapshotCopyConfigurationsInput`<sup>Optional</sup> <a name="snapshotCopyConfigurationsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.snapshotCopyConfigurationsInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations> getSnapshotCopyConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>>

---

##### `adminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```java
public java.lang.String getAdminPasswordSecretKmsKeyId();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `adminUserPassword`<sup>Required</sup> <a name="adminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```java
public java.lang.String getAdminUserPassword();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```java
public java.lang.String getDefaultIamRoleArn();
```

- *Type:* java.lang.String

---

##### `finalSnapshotName`<sup>Required</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotName"></a>

```java
public java.lang.String getFinalSnapshotName();
```

- *Type:* java.lang.String

---

##### `finalSnapshotRetentionPeriod`<sup>Required</sup> <a name="finalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getFinalSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manageAdminPassword`<sup>Required</sup> <a name="manageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageAdminPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `namespaceResourcePolicy`<sup>Required</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceResourcePolicy"></a>

```java
public java.lang.String getNamespaceResourcePolicy();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.redshiftIdcApplicationArn"></a>

```java
public java.lang.String getRedshiftIdcApplicationArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceConfig;

RedshiftserverlessNamespaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .namespaceName(java.lang.String)
//  .adminPasswordSecretKmsKeyId(java.lang.String)
//  .adminUsername(java.lang.String)
//  .adminUserPassword(java.lang.String)
//  .dbName(java.lang.String)
//  .defaultIamRoleArn(java.lang.String)
//  .finalSnapshotName(java.lang.String)
//  .finalSnapshotRetentionPeriod(java.lang.Number)
//  .iamRoles(java.util.List<java.lang.String>)
//  .kmsKeyId(java.lang.String)
//  .logExports(java.util.List<java.lang.String>)
//  .manageAdminPassword(java.lang.Boolean|IResolvable)
//  .namespaceResourcePolicy(java.lang.String)
//  .redshiftIdcApplicationArn(java.lang.String)
//  .snapshotCopyConfigurations(IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations>)
//  .tags(IResolvable|java.util.List<RedshiftserverlessNamespaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | A unique identifier for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | The user name associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">adminUserPassword</a></code> | <code>java.lang.String</code> | The password associated with the admin user for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | The database name associated for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | The default IAM role ARN for the namespace that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName">finalSnapshotName</a></code> | <code>java.lang.String</code> | The name of the namespace the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain automated snapshot in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | The collection of log types to be exported provided by the customer. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">manageAdminPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | The resource policy document that will be attached to the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>java.lang.String</code> | The ARN for the Redshift application that integrates with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations">snapshotCopyConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>></code> | The snapshot copy configurations for the namespace. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>></code> | The list of tags for the namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

A unique identifier for the namespace.

You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}

---

##### `adminPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```java
public java.lang.String getAdminPasswordSecretKmsKeyId();
```

- *Type:* java.lang.String

The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.

You can only use this parameter if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

The user name associated with the admin user for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}

---

##### `adminUserPassword`<sup>Optional</sup> <a name="adminUserPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```java
public java.lang.String getAdminUserPassword();
```

- *Type:* java.lang.String

The password associated with the admin user for the namespace that is being created.

Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

The database name associated for the namespace that is being created.

Only alphanumeric characters and underscores are allowed. It should start with an alphabet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}

---

##### `defaultIamRoleArn`<sup>Optional</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```java
public java.lang.String getDefaultIamRoleArn();
```

- *Type:* java.lang.String

The default IAM role ARN for the namespace that is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotName"></a>

```java
public java.lang.String getFinalSnapshotName();
```

- *Type:* java.lang.String

The name of the namespace the source snapshot was created from.

Please specify the name if needed before deleting namespace

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_name RedshiftserverlessNamespace#final_snapshot_name}

---

##### `finalSnapshotRetentionPeriod`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.finalSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getFinalSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days to retain automated snapshot in the destination region after they are copied from the source region.

If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#final_snapshot_retention_period RedshiftserverlessNamespace#final_snapshot_retention_period}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

The collection of log types to be exported provided by the customer.

Should only be one of the three supported log types: userlog, useractivitylog and connectionlog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}

---

##### `manageAdminPassword`<sup>Optional</sup> <a name="manageAdminPassword" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageAdminPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.

You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceResourcePolicy"></a>

```java
public java.lang.String getNamespaceResourcePolicy();
```

- *Type:* java.lang.String

The resource policy document that will be attached to the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#namespace_resource_policy RedshiftserverlessNamespace#namespace_resource_policy}

---

##### `redshiftIdcApplicationArn`<sup>Optional</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.redshiftIdcApplicationArn"></a>

```java
public java.lang.String getRedshiftIdcApplicationArn();
```

- *Type:* java.lang.String

The ARN for the Redshift application that integrates with IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#redshift_idc_application_arn RedshiftserverlessNamespace#redshift_idc_application_arn}

---

##### `snapshotCopyConfigurations`<sup>Optional</sup> <a name="snapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.snapshotCopyConfigurations"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations> getSnapshotCopyConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>>

The snapshot copy configurations for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_copy_configurations RedshiftserverlessNamespace#snapshot_copy_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>>

The list of tags for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}

---

### RedshiftserverlessNamespaceNamespace <a name="RedshiftserverlessNamespaceNamespace" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceNamespace;

RedshiftserverlessNamespaceNamespace.builder()
    .build();
```


### RedshiftserverlessNamespaceSnapshotCopyConfigurations <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurations" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations;

RedshiftserverlessNamespaceSnapshotCopyConfigurations.builder()
//  .destinationKmsKeyId(java.lang.String)
//  .destinationRegion(java.lang.String)
//  .snapshotRetentionPeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId">destinationKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod">snapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}. |

---

##### `destinationKmsKeyId`<sup>Optional</sup> <a name="destinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationKmsKeyId"></a>

```java
public java.lang.String getDestinationKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_kms_key_id RedshiftserverlessNamespace#destination_kms_key_id}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#destination_region RedshiftserverlessNamespace#destination_region}.

---

##### `snapshotRetentionPeriod`<sup>Optional</sup> <a name="snapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations.property.snapshotRetentionPeriod"></a>

```java
public java.lang.Number getSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#snapshot_retention_period RedshiftserverlessNamespace#snapshot_retention_period}.

---

### RedshiftserverlessNamespaceTags <a name="RedshiftserverlessNamespaceTags" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceTags;

RedshiftserverlessNamespaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#key RedshiftserverlessNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/redshiftserverless_namespace#value RedshiftserverlessNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessNamespaceNamespaceOutputReference <a name="RedshiftserverlessNamespaceNamespaceOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceNamespaceOutputReference;

new RedshiftserverlessNamespaceNamespaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn">adminPasswordSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId">adminPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn">namespaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretArn`<sup>Required</sup> <a name="adminPasswordSecretArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn"></a>

```java
public java.lang.String getAdminPasswordSecretArn();
```

- *Type:* java.lang.String

---

##### `adminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="adminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId"></a>

```java
public java.lang.String getAdminPasswordSecretKmsKeyId();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn"></a>

```java
public java.lang.String getDefaultIamRoleArn();
```

- *Type:* java.lang.String

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceArn`<sup>Required</sup> <a name="namespaceArn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn"></a>

```java
public java.lang.String getNamespaceArn();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue"></a>

```java
public RedshiftserverlessNamespaceNamespace getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceNamespace">RedshiftserverlessNamespaceNamespace</a>

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsList <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList;

new RedshiftserverlessNamespaceSnapshotCopyConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get"></a>

```java
public RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceSnapshotCopyConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>>

---


### RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference <a name="RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference;

new RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId">resetDestinationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod">resetSnapshotRetentionPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationKmsKeyId` <a name="resetDestinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationKmsKeyId"></a>

```java
public void resetDestinationKmsKeyId()
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetDestinationRegion"></a>

```java
public void resetDestinationRegion()
```

##### `resetSnapshotRetentionPeriod` <a name="resetSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resetSnapshotRetentionPeriod"></a>

```java
public void resetSnapshotRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput">destinationKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput">destinationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput">snapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId">destinationKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod">snapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationKmsKeyIdInput`<sup>Optional</sup> <a name="destinationKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyIdInput"></a>

```java
public java.lang.String getDestinationKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegionInput"></a>

```java
public java.lang.String getDestinationRegionInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionPeriodInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `destinationKmsKeyId`<sup>Required</sup> <a name="destinationKmsKeyId" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId"></a>

```java
public java.lang.String getDestinationKmsKeyId();
```

- *Type:* java.lang.String

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionPeriod`<sup>Required</sup> <a name="snapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod"></a>

```java
public java.lang.Number getSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessNamespaceSnapshotCopyConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceSnapshotCopyConfigurations">RedshiftserverlessNamespaceSnapshotCopyConfigurations</a>

---


### RedshiftserverlessNamespaceTagsList <a name="RedshiftserverlessNamespaceTagsList" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceTagsList;

new RedshiftserverlessNamespaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get"></a>

```java
public RedshiftserverlessNamespaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftserverlessNamespaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>>

---


### RedshiftserverlessNamespaceTagsOutputReference <a name="RedshiftserverlessNamespaceTagsOutputReference" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshiftserverless_namespace.RedshiftserverlessNamespaceTagsOutputReference;

new RedshiftserverlessNamespaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftserverlessNamespaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftserverlessNamespace.RedshiftserverlessNamespaceTags">RedshiftserverlessNamespaceTags</a>

---



