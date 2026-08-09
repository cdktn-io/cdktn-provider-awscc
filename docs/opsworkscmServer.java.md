# `opsworkscmServer` Submodule <a name="`opsworkscmServer` Submodule" id="@cdktn/provider-awscc.opsworkscmServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworkscmServer <a name="OpsworkscmServer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server awscc_opsworkscm_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServer;

OpsworkscmServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileArn(java.lang.String)
    .instanceType(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean|IResolvable)
//  .backupId(java.lang.String)
//  .backupRetentionCount(java.lang.Number)
//  .customCertificate(java.lang.String)
//  .customDomain(java.lang.String)
//  .customPrivateKey(java.lang.String)
//  .disableAutomatedBackup(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineAttributes(IResolvable|java.util.List<OpsworkscmServerEngineAttributes>)
//  .engineModel(java.lang.String)
//  .engineVersion(java.lang.String)
//  .keyPair(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serverName(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<OpsworkscmServerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupRetentionCount">backupRetentionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customDomain">customDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customPrivateKey">customPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.disableAutomatedBackup">disableAutomatedBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineAttributes">engineAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineModel">engineModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceProfileArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serviceRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="backupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.backupRetentionCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customCertificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `customPrivateKey`<sup>Optional</sup> <a name="customPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.customPrivateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="disableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.disableAutomatedBackup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `engineAttributes`<sup>Optional</sup> <a name="engineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `engineModel`<sup>Optional</sup> <a name="engineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes">putEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount">resetBackupRetentionCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate">resetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey">resetCustomPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup">resetDisableAutomatedBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes">resetEngineAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel">resetEngineModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEngineAttributes` <a name="putEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes"></a>

```java
public void putEngineAttributes(IResolvable|java.util.List<OpsworkscmServerEngineAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putEngineAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OpsworkscmServerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetAssociatePublicIpAddress"></a>

```java
public void resetAssociatePublicIpAddress()
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetBackupRetentionCount` <a name="resetBackupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetBackupRetentionCount"></a>

```java
public void resetBackupRetentionCount()
```

##### `resetCustomCertificate` <a name="resetCustomCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomCertificate"></a>

```java
public void resetCustomCertificate()
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomDomain"></a>

```java
public void resetCustomDomain()
```

##### `resetCustomPrivateKey` <a name="resetCustomPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetCustomPrivateKey"></a>

```java
public void resetCustomPrivateKey()
```

##### `resetDisableAutomatedBackup` <a name="resetDisableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetDisableAutomatedBackup"></a>

```java
public void resetDisableAutomatedBackup()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineAttributes` <a name="resetEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineAttributes"></a>

```java
public void resetEngineAttributes()
```

##### `resetEngineModel` <a name="resetEngineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineModel"></a>

```java
public void resetEngineModel()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetServerName"></a>

```java
public void resetServerName()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServer;

OpsworkscmServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServer;

OpsworkscmServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServer;

OpsworkscmServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServer;

OpsworkscmServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsworkscmServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpsworkscmServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsworkscmServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsworkscmServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpsworkscmServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes">engineAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput">backupRetentionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput">customCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput">customDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput">customPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput">disableAutomatedBackupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput">engineAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput">engineModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput">serviceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount">backupRetentionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey">customPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup">disableAutomatedBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel">engineModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `engineAttributes`<sup>Required</sup> <a name="engineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributes"></a>

```java
public OpsworkscmServerEngineAttributesList getEngineAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList">OpsworkscmServerEngineAttributesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tags"></a>

```java
public OpsworkscmServerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList">OpsworkscmServerTagsList</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddressInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionCountInput`<sup>Optional</sup> <a name="backupRetentionCountInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCountInput"></a>

```java
public java.lang.Number getBackupRetentionCountInput();
```

- *Type:* java.lang.Number

---

##### `customCertificateInput`<sup>Optional</sup> <a name="customCertificateInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificateInput"></a>

```java
public java.lang.String getCustomCertificateInput();
```

- *Type:* java.lang.String

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomainInput"></a>

```java
public java.lang.String getCustomDomainInput();
```

- *Type:* java.lang.String

---

##### `customPrivateKeyInput`<sup>Optional</sup> <a name="customPrivateKeyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKeyInput"></a>

```java
public java.lang.String getCustomPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `disableAutomatedBackupInput`<sup>Optional</sup> <a name="disableAutomatedBackupInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackupInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedBackupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engineAttributesInput`<sup>Optional</sup> <a name="engineAttributesInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineAttributesInput"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerEngineAttributes> getEngineAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>>

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineModelInput`<sup>Optional</sup> <a name="engineModelInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModelInput"></a>

```java
public java.lang.String getEngineModelInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `serviceRoleArnInput`<sup>Optional</sup> <a name="serviceRoleArnInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArnInput"></a>

```java
public java.lang.String getServiceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>>

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `backupRetentionCount`<sup>Required</sup> <a name="backupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.backupRetentionCount"></a>

```java
public java.lang.Number getBackupRetentionCount();
```

- *Type:* java.lang.Number

---

##### `customCertificate`<sup>Required</sup> <a name="customCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

---

##### `customPrivateKey`<sup>Required</sup> <a name="customPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.customPrivateKey"></a>

```java
public java.lang.String getCustomPrivateKey();
```

- *Type:* java.lang.String

---

##### `disableAutomatedBackup`<sup>Required</sup> <a name="disableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.disableAutomatedBackup"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineModel`<sup>Required</sup> <a name="engineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineModel"></a>

```java
public java.lang.String getEngineModel();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworkscmServerConfig <a name="OpsworkscmServerConfig" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerConfig;

OpsworkscmServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceProfileArn(java.lang.String)
    .instanceType(java.lang.String)
    .serviceRoleArn(java.lang.String)
//  .associatePublicIpAddress(java.lang.Boolean|IResolvable)
//  .backupId(java.lang.String)
//  .backupRetentionCount(java.lang.Number)
//  .customCertificate(java.lang.String)
//  .customDomain(java.lang.String)
//  .customPrivateKey(java.lang.String)
//  .disableAutomatedBackup(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineAttributes(IResolvable|java.util.List<OpsworkscmServerEngineAttributes>)
//  .engineModel(java.lang.String)
//  .engineVersion(java.lang.String)
//  .keyPair(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serverName(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<OpsworkscmServerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount">backupRetentionCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate">customCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey">customPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup">disableAutomatedBackup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes">engineAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel">engineModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_profile_arn OpsworkscmServer#instance_profile_arn}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#instance_type OpsworkscmServer#instance_type}.

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#service_role_arn OpsworkscmServer#service_role_arn}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.associatePublicIpAddress"></a>

```java
public java.lang.Boolean|IResolvable getAssociatePublicIpAddress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#associate_public_ip_address OpsworkscmServer#associate_public_ip_address}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_id OpsworkscmServer#backup_id}.

---

##### `backupRetentionCount`<sup>Optional</sup> <a name="backupRetentionCount" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.backupRetentionCount"></a>

```java
public java.lang.Number getBackupRetentionCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#backup_retention_count OpsworkscmServer#backup_retention_count}.

---

##### `customCertificate`<sup>Optional</sup> <a name="customCertificate" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customCertificate"></a>

```java
public java.lang.String getCustomCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_certificate OpsworkscmServer#custom_certificate}.

---

##### `customDomain`<sup>Optional</sup> <a name="customDomain" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_domain OpsworkscmServer#custom_domain}.

---

##### `customPrivateKey`<sup>Optional</sup> <a name="customPrivateKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.customPrivateKey"></a>

```java
public java.lang.String getCustomPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#custom_private_key OpsworkscmServer#custom_private_key}.

---

##### `disableAutomatedBackup`<sup>Optional</sup> <a name="disableAutomatedBackup" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.disableAutomatedBackup"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedBackup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#disable_automated_backup OpsworkscmServer#disable_automated_backup}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine OpsworkscmServer#engine}.

---

##### `engineAttributes`<sup>Optional</sup> <a name="engineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineAttributes"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerEngineAttributes> getEngineAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_attributes OpsworkscmServer#engine_attributes}.

---

##### `engineModel`<sup>Optional</sup> <a name="engineModel" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineModel"></a>

```java
public java.lang.String getEngineModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_model OpsworkscmServer#engine_model}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#engine_version OpsworkscmServer#engine_version}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key_pair OpsworkscmServer#key_pair}.

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_backup_window OpsworkscmServer#preferred_backup_window}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#preferred_maintenance_window OpsworkscmServer#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#security_group_ids OpsworkscmServer#security_group_ids}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#server_name OpsworkscmServer#server_name}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#subnet_ids OpsworkscmServer#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#tags OpsworkscmServer#tags}.

---

### OpsworkscmServerEngineAttributes <a name="OpsworkscmServerEngineAttributes" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerEngineAttributes;

OpsworkscmServerEngineAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#name OpsworkscmServer#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

### OpsworkscmServerTags <a name="OpsworkscmServerTags" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerTags;

OpsworkscmServerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#key OpsworkscmServer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opsworkscm_server#value OpsworkscmServer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworkscmServerEngineAttributesList <a name="OpsworkscmServerEngineAttributesList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerEngineAttributesList;

new OpsworkscmServerEngineAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get"></a>

```java
public OpsworkscmServerEngineAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerEngineAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>>

---


### OpsworkscmServerEngineAttributesOutputReference <a name="OpsworkscmServerEngineAttributesOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerEngineAttributesOutputReference;

new OpsworkscmServerEngineAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|OpsworkscmServerEngineAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerEngineAttributes">OpsworkscmServerEngineAttributes</a>

---


### OpsworkscmServerTagsList <a name="OpsworkscmServerTagsList" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerTagsList;

new OpsworkscmServerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get"></a>

```java
public OpsworkscmServerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpsworkscmServerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>>

---


### OpsworkscmServerTagsOutputReference <a name="OpsworkscmServerTagsOutputReference" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opsworkscm_server.OpsworkscmServerTagsOutputReference;

new OpsworkscmServerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpsworkscmServerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opsworkscmServer.OpsworkscmServerTags">OpsworkscmServerTags</a>

---



